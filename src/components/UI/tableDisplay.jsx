import propTypes from "prop-types";
import InputDropdown from "./form/input-dropdown";

/**
 * Data display
 * @param {node} itemsPerPage items per page
 * @param {func} setSelect input state change
 * @param {array} numberEntries List of number of entries per page
 * @param {string} className input class name
 * @param {string} classContent input content class name
 * @param {string} classChevron input chevron class name
 * @component
 */
export default function Display({
  itemsPerPage,
  setSelect,
  numberEntries,
  className,
  classContent,
  classChevron,
}) {
  const showPerPage = (e) => {
    return setSelect(e.textContent);
  };

  return (
    <div className="show-entries">
      <InputDropdown
        label="Show"
        name="show"
        className={className}
        classContent={classContent}
        classChevron={classChevron}
        value={itemsPerPage}
        input={itemsPerPage}
        list={numberEntries}
        setSelect={showPerPage}
      />
      <span className="entries">entries</span>
    </div>
  );
}

Display.propTypes = {
  itemsPerPage: propTypes.node,
  setSelect: propTypes.func,
  numberEntries: propTypes.array,
  className: propTypes.string,
  classContent: propTypes.string,
  classChevron: propTypes.string,
};
