import PropTypes from 'prop-types';
function Footer({ length }) {
  return (
    <footer>
      <p>
        {length === 0 ? "No item" : `${length} List ${length === 1 ? "item" : "items"}`}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Footer;
