import PropTypes from 'prop-types';
import ItemList from './ItemList';

function Content({ items, handleCheck, handleDelete }) {
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

Content.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      checked: PropTypes.bool.isRequired,
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Content;
