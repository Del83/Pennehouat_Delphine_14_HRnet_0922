import propTypes from 'prop-types';
import InputDropdown from "./form/input-dropdown"

/**
* Data display
* @param {Number} itemsPerPage items per page 
* @param {Number} itemsTotal the total of the items
* @component
*/
export default function Display ( {itemsPerPage, setItemsPerPage} ) {
  
      const numberEntries = [10, 15, 30];

      const showPerPage = (e) => {
        return setItemsPerPage(e)
      }

    return (
         <div className="show-entries">
            <span>Show</span> 
                <b>
                  {/* < InputDropdown
                        label="Show"
                        name="show"
                        value={itemsPerPage}
                        list={numberEntries}
                    />   */}
                    <select onChange={(e) => showPerPage(e.target.value)}>
                    {numberEntries.map((number, index) => (
                        <option key={index} value={number} defaultValue={itemsPerPage} >
                            {number}
                        </option>
                    ))}
                    </select>
                </b> 
            <span>entries</span>
        </div>
    )
}

Display.propTypes = {
  itemsPerPage: propTypes.number,
  setItemsPerPage: propTypes.func,
}

    

//   const itemsPerPage = useSelector((state) => state.employeeList.itemsPerPage) 

//   return (
//        <div className="show-entries">
//           <span>Show</span> 
//               <b>
//                 < InputDropdown
//                       label="Show"
//                       name="show"
//                       value={itemsPerPage}
//                       list={numberEntries}
//                   />  
//                   <select onChange={(e) => dispatch(showPerPage(e.target.value))}>
//                   {numberEntries.map((number, index) => (
//                       <option key={index} value={number} defaultValue={itemsPerPage} >
//                           {number}
//                       </option>
//                   ))}
//                   </select>
//               </b> 
//           <span>entries</span>
//       </div>
//   )
// }