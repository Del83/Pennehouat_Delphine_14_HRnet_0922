/** TOOLS */
import DatePicker from "react-widgets/DatePicker";
import propTypes from "prop-types";

/**
 * React component : The input date of the form
 * @param {string} name field name
 * @param {string} label field label
 * @param {date} max maximum date
 * @param {date} defaultValue default date
 * @param {func} setInput input state change
 * @component
 */
export default function InputDate({
  name,
  label,
  max,
  defaultValue,
  setInput,
}) {
  const formatDate = (date) => {
    var d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("/");
  };
  const handleDate = (e) => setInput(e);

  return (
    <div className="form-date" data-date="birth">
      <div className="form-date-ctn">
        <label className="form-label" htmlFor={name}>
          {label}
          <DatePicker
            className="form-control-date"
            onChange={(e) => handleDate({ value: formatDate(e), name: name })}
            name={name}
            placeholder="dd/mm/yyyy"
            max={max}
            calendarProps={{ defaultView: "year" }}
            defaultValue={defaultValue}
          />
        </label>
      </div>
    </div>
  );
}
InputDate.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  max: propTypes.instanceOf(Date),
  defaultValue: propTypes.instanceOf(Date),
  setInput: propTypes.func,
};
