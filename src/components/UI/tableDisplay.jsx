import { useDispatch, useSelector } from "react-redux"
import { showPerPage } from "../../utils/getEmployees"
import Dropdown from "./form/form-dropdown"

/**
* Entries displayed
* @component
*/
export default function EntriesDisplayed () {
    
    const numberEntries = [
        {
          name: 10,
        },
        {
          name: 15,
        },
        {
          name: 30,
        },
      ];
      
    const dispatch = useDispatch()
    const employeesPerPage = useSelector((state) => state.employeeList.employeesPerPage) 
    return (
         <div className="show-entries">
            <span>Show</span> 
                <b>
                  < Dropdown
                        label="Show"
                        name="show"
                        value={employeesPerPage}
                        list={numberEntries}
                    />  
                    {/* <select onChange={(e) => dispatch(showPerPage(e.target.value))}>
                    {numberEntries.map((number, index) => (
                        <option key={index} value={number} defaultValue={employeesPerPage} >
                            {number}
                        </option>
                    ))}
                    </select> */}
                </b> 
            <span>entries</span>
        </div>
    )
}

