/** TOOLS */
import propTypes from "prop-types";

/**
 * React component : Error message display
 * @param {bool} valid default date
 * @component
 */
export default function InputError({ valid }) {
  if (valid === false) {
    return (
      <div>
        <span className="InputError">
          Invalid format, enter at least 3 characters
        </span>
      </div>
    );
  }
}

InputError.propTypes = {
  valid: propTypes.bool,
};
