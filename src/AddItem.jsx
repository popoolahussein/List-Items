import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();

  return (
    <form className='addform' onSubmit={handleSubmit}>
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
  )
};

AddItem.propTypes = {
  newItem: PropTypes.string.isRequired,
  setNewItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddItem
