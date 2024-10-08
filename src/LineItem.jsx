import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

LineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    checked: PropTypes.bool.isRequired,
    item: PropTypes.string.isRequired,
  }).isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default LineItem;
