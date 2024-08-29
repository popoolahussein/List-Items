import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label 
        className='label'
        htmlFor="search">Search</label>
        <FaSearch className='search' />
        <input
        className='searchItem'
         type="text"
         id='search'
         role='seachbox'
         placeholder='Search Items'
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />
       {/* <button
        className='searchButton'
          type='submit'
          arial-label='Add Item'
       > */}
        
       {/* </button> */}
    </form>
  )
};

SearchItem.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchItem
