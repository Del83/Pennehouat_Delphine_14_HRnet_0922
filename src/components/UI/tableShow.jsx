import { useDispatch, useSelector } from "react-redux"
import { showPerPage } from "../../utils/getEmployees"

/**
* Showing table
* @component
*/
export default function TableShowed () {
    const numberEntries = [10, 15, 20] 
    const dispatch = useDispatch()
    const employeesPerPage = useSelector((state) => state.employeeList.employeesPerPage) 
    return (
         <div className="show-entries">
            <span>Show</span> 
                <b>
                    <select onChange={(e) => dispatch(showPerPage(e.target.value))}>
                    {numberEntries.map((number, index) => (
                        <option key={index} value={number} defaultValue={employeesPerPage} >
                            {number}
                        </option>
                    ))}
                    </select>
                </b> 
            <span>entries</span>
        </div>
    )
}



//// FUNCTION OK - DEBUT ///////

// export default function TableShowed ({ employeePerPage, setEmployeePerPage }) {

//     const numberEntries = [10, 15, 20] 

//     const selectNumberEntries = (e) => {
//         return setEmployeePerPage(e.target.value)
//     }

//     const entries = () => {
//         return (
//             <select onChange={(e) => selectNumberEntries(e)}>
//                 {numberEntries.map((number, index) => (
//                     <option key={index} value={number} defaultValue={employeePerPage} >
//                         {number}
//                     </option>
//                 ))}
//             </select>
//         )
//     }

//     return (
//          <div className="show-entries">
//             <span>Show</span> <b>{entries()}</b> <span>entries</span>
//         </div>
//     )
// }

//// FUNCTION OK - FIN ///////