import propTypes from "prop-types";
import InputError from "./input-error";

/**
 * React component : The input text of the form
 * @param {string} name field name
 * @param {string} label field label
 * @param {bool} valid default date
 * @param {func} setInput input state change
 * @param {string} input input value
 * @param {string} className input class name
 * @component
 */
export default function InputText({
  name,
  label,
  valid,
  setInput,
  input,
  className,
}) {
  const handleInput = (e) => setInput(e);

  return (
    <div className="form-input">
      <div>
        <label className="form-label" htmlFor={name}>
          {label}
          <input
            key={name}
            name={name}
            type="text"
            id={name}
            value={input}
            onChange={(e) =>
              handleInput({ value: e.target.value, name: e.target.name })
            }
            className={className}
            min={3}
            max={20}
          />
        </label>
      </div>
      <InputError valid={valid} />
    </div>
  );
}

InputText.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  valid: propTypes.bool,
  setInput: propTypes.func,
  input: propTypes.node,
  className: propTypes.string,
};
