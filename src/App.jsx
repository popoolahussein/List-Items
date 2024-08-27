import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('generallist');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const savedItems = localStorage.getItem('generallist');
    const parsedItems = savedItems ? JSON.parse(savedItems) : [];

    const uniqueItems = Array.from(new Map(parsedItems.map(item => [item.id, item])).values());
    if (uniqueItems.length !== parsedItems.length) {
      console.warn('Duplicate IDs found in local storage:', parsedItems.map(item => item.id));
      localStorage.setItem('generallist', JSON.stringify(uniqueItems));
      setItems(uniqueItems);
    } else {
      setItems(parsedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('generallist', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const itemExists = items.some(existingItem => existingItem.item.toLowerCase() === item.toLowerCase());

    if (itemExists) {
      alert('This item already exists in the list.');
      return;
    }

    const id = uuidv4();
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <main className="App">
      <Header title="Lists" />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </main>
  );
}

export default App;
