/** IMPORT REACT REDUX */
//import { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-widgets/DatePicker";
/** ACTION */
import { handleDate } from "../../../feature/createEmployeeSlice";

/** STYLE */
import "../../../styles/create.css"
import "../../../styles/date.css"

export default function InputDate ({name, label, max, defaultValue }) {
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
              <label className="form-label" htmlFor={name}>
                {label}
              <DatePicker className="form-control-date"  onChange={ (e) => dispatch(handleDate({value:formatDate(e), name:name}))} name={name} placeholder="dd/mm/yyyy" max={max} calendarProps={{ defaultView:"year"}} defaultValue={defaultValue}/>  
              </label>
            </div>
          </div>
          
        
      );
  }

  // <div className="form-date" data-date="birth">
  //           <div className="form-date-ctn">
  //             <span className="form-label" htmlFor={name}>{label}</span>
  //             <DatePicker className="form-control-date"  onChange={ (e) => dispatch(handleDate({value:formatDate(e), name:name}))} name={name} placeholder="dd/mm/yyyy" max={max} calendarProps={{ defaultView:"year"}} defaultValue={defaultValue}/>
  //           </div>
  //         </div>

// export default function InputDate ({name, label, max, defaultValue }) {
//   const dispatch = useDispatch();
  
//       const formatDate = (date) => {
//         var d = new Date(date)
//         let month = '' + (d.getMonth() + 1)
//         let day = '' + d.getDate()
//         let year = d.getFullYear()
//         if (month.length < 2) 
//             month = '0' + month;
//         if (day.length < 2) 
//             day = '0' + day;
//         return [year, month, day].join('/');
//       }
  
//       const [birthValue, setBirthValue] = useState("")
//       const [birthValid, setBirthValid] = useState(null)
//       const [startDateValue, setStartDateValue] = useState("")
//       const [startDateValid, setStartDateValid] = useState(null)
  
//       // const handleDate = (e) => {
//       //   const inputValue = e.value;
//       //   const inputName = e.name;
//       //   if (inputName === "birth") {
//       //       setBirthValid(true);
//       //       return setBirthValue(inputValue);
//       //   }
//       //   if (inputName === "startDate") {
//       //     setStartDateValid(true);
//       //     return setStartDateValue(inputValue);
//       //   }
//       // }
  
//       console.log(birthValue);
//       return (
        
//           <div className="form-date" data-date="birth">
//             <div className="form-date-ctn">
//               <span className="form-label" htmlFor={name}>{label}</span>
//               <DatePicker className="form-control-date"  onChange={ (e) => handleDate({value:formatDate(e), name:name})} name={name} placeholder="dd/mm/yyyy" max={max} calendarProps={{ defaultView:"year"}} defaultValue={defaultValue}/>
//             </div>
//           </div>
          
        
//       );
//   }