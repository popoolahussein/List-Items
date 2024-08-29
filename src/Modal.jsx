import PropTypes from 'prop-types';
const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
