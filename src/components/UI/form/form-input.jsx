import { useDispatch } from "react-redux";
import "../../../styles/create.css"
import { handleInput } from "../../../utils/postEmployees";

/**
* Form input
* @component
*/
export default function FormInput ( { label, name, type, value, valid, placeholder }) {

  const dispatch = useDispatch();
  

  const ErrorMessage = () => {
    if (valid === false) {
      return (
        <div>
          <span className="errorMessage"> Required fields or invalid format</span>
        </div>
      )
    }
  }

    return (
      <div className="form-input"> 
      <div>
         <label className="form-label" htmlFor={name}>
            {label}
            <input
                key={name}
                name={name}
                type={type}
                id={name}
                value={value}
                onChange={ (e) => dispatch(handleInput({value:e.target.value, name:e.target.name, category:{name}}))}
                className="form-control"
                placeholder={placeholder}
              />
        </label>
      </div>
       <ErrorMessage/>
      </div>
        
    )
}

// export default function FormInput ( { labelFor, valueInput, setValue, className }) {

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