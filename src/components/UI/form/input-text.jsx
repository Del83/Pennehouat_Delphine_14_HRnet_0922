import { useDispatch } from "react-redux";
import "../../../styles/create.css"
import { handleInput } from "../../../feature/createEmployeeSlice";
import InputError from "./input-error";

/**
* Form input
* @component
*/
export default function InputText ( { label, value, name, valid }) {

  const dispatch = useDispatch();
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
                value={value}
                onChange={ (e) => dispatch(handleInput({value : e.target.value, name: e.target.name}))}
                className="form-control"
                min={3}
                max={20}
              />
        </label>
      </div> 
      {}
       <InputError valid={valid} />
      </div>
        
    )
}

// export default function InputText ( { labelFor, valueInput, setValue, className }) {

//   const dispatch = useDispatch()
//   const searchInput = useSelector((state) => state.employeeList.searchInput) 
//   const handleSearchInput = (e) => {
//       const inputContent = e.target.value.toLowerCase()
//       .replace(/\s/g, "")
//       .normalize("NFD")
//       .replace(/\p{Diacritic}/gu, "");
//       return dispatch(searchData(inputContent))
//   }

//     return (
//               <input
//                 value={valueInput}
//                 onChange={(e) => setValue(e.target.value)}
//                 type="text"
//                 id={labelFor}
//                 className={className}
//                 //className="form-control"
//                 //fieldError="false"
//               />
//     )
// }