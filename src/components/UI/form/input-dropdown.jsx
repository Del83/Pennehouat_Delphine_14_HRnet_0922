import propTypes from "prop-types";
import { useState } from "react";

import chevronDown from "../../../assets/chevronDown.png";
import chevronUp from "../../../assets/chevronUp.png";
import InputText from "./input-text";
/** STYLE */
import "../../../styles/create.css";

/**
 * React component : The input dropdown of the form
 * @param {string} name field name
 * @param {string} label field label
 * @param {Array} list maximum date
 * @param {bool} valid default date
 * @param {func} setSelect input state change
 * @param {func} setInput input state change
 * @param {string} input input value
 * @param {string} className input class name
 * @param {string} classContent input content class name
 * @param {string} classChevron input chevron class name
 * @component
 */
export default function InputDropdown({
  name,
  label,
  list,
  valid,
  setSelect,
  setInput,
  input,
  className,
  classContent,
  classChevron,
}) {
  const [unfolded, setUnfolded] = useState(false);
  const chevron = unfolded ? chevronUp : chevronDown;
  const handleFolded = () => {
    setUnfolded(!unfolded);
  };

  const select = (e) => {
    handleFolded();
    return setSelect({
      title: e.target.title,
      textContent: e.target.textContent,
    });
  };

  window.onclick = function (e) {
    if (!e.target.matches(".chevron")) {
      setUnfolded(false);
    }
  };

  return (
    <div
      className={unfolded ? "dropdown-container folded" : "dropdown-container"}
      onClick={handleFolded}
    >
      <InputText
        autocomplete="off"
        label={label}
        name={name}
        valid={valid}
        className={unfolded ? `unfolded ${className} ` : className}
        input={input}
        setInput={setInput}
      />
      {unfolded && (
        <ul className={classContent} name={name}>
          {list.map((item, index) => (
            <li key={index} title={name} onClick={select}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <img
        className={classChevron}
        src={chevron}
        alt="drop-down menu chevron"
        width="20"
        height="10"
      />
    </div>
  );
}

InputDropdown.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  list: propTypes.array,
  valid: propTypes.bool,
  setSelect: propTypes.func,
  setInput: propTypes.func,
  input: propTypes.node,
  className: propTypes.string,
  classContent: propTypes.string,
  classChevron: propTypes.string,
};
