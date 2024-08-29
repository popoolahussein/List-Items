import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import Modal from './Modal';
import { useState, useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit, existingItems }) => {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef();

  const checkForDuplicate = () => {
    if (existingItems.includes(newItem)) {
      setShowModal(true);
      return true;
    }
    return false;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!checkForDuplicate()) {
      handleSubmit();
      setNewItem('');
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form className='addform' onSubmit={handleFormSubmit}>
        <label className='label' htmlFor="addItem">Add Item</label>
        <input
          type="text"
          className='addItem'
          id='addItem'
          autoFocus
          ref={inputRef}
          placeholder='Add Item'
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          className='button'
          type='submit'
          aria-label='Add Item'
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </form>
      {showModal && (
        <Modal 
          message="This item already exists in the list." 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

AddItem.propTypes = {
  newItem: PropTypes.string.isRequired,
  setNewItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  existingItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddItem;
