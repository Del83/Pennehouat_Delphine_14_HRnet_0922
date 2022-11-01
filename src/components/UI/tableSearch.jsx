import propTypes from "prop-types";

/**
 * Search in table
 * @param {func} handleSearchInput function that handles the search bar entry
 * @param {string} searchInput search input
 * @component
 */
export default function Search({ handleSearchInput, searchInput }) {
  return (
    <div className="search">
      <span className="form-label-search">Search</span>
      <input
        className="search-input"
        name="search"
        type="search"
        placeholder={" ..."}
        onChange={(e) => handleSearchInput(e)}
        value={searchInput}
      />
    </div>
  );
}

Search.propTypes = {
  handleSearchInput: propTypes.func,
  searchInput: propTypes.string,
};
