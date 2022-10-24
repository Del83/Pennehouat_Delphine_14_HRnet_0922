/** IMPORT REACT REDUX */
import { useDispatch } from "react-redux";
import DatePicker from "react-widgets/DatePicker";
/** ACTION */
import { handleDate } from "../../../feature/createEmployeeSlice";

import InputError from "./input-error";

/** STYLE */
import "../../../styles/create.css"
import "../../../styles/date.css"

export default function InputDate ({name, label, max, defaultValue, valid, messageError}) {
const dispatch = useDispatch();

    const formatDate = (date) => {
      var d = new Date(date)
      let month = '' + (d.getMonth() + 1)
      let day = '' + d.getDate()
      let year = d.getFullYear()
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
      return [year, month, day].join('/');
    }

    return (
      
        <div className="form-date" data-date="birth">
          <div className="form-date-ctn">
            <span className="form-label" htmlFor={name}>{label}</span>
            <DatePicker className="form-control-date"  onChange={ (e) => dispatch(handleDate({value:formatDate(e), name:name}))} name={name} placeholder="dd/mm/yyyy" max={max} calendarProps={{ defaultView:"year"}} defaultValue={defaultValue}/>
          </div>
        </div>
        
      
    );
}
