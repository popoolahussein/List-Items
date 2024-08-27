import ItemList from './ItemList';

function Content({ items, setItems, handleCheck, handleDelete }) {
  return (
    <div className='content-div'>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className='empty-message'>Your list is empty.</p>
      )}
    </div>
  );
}

export default Content;
