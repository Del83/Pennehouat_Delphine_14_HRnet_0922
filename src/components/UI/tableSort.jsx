import { useDispatch} from "react-redux"
import { sortIncreasing, sortDescending } from "../../utils/getEmployees"
import "../../styles/table.css"

/**
* Sorting table
* @component
*/
export default function TableSorted ( { categories } ) {

  const dispatch = useDispatch()

    return (
      <div>
        <div className="chevronUp" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          return dispatch(sortIncreasing(category))}}>▲</div>

        <div className="chevronDown" dataset={categories} onClick={(e)=> {
          const category = e.target.attributes.dataset.value;
          return dispatch(sortDescending(category))}}>▲</div>
      </div>
    )
}




// export default function TableSorted ( {data, setData, categories} ) {

//   const employees = useSelector((state) => state.employeeList.data);
//   const dispatch = useDispatch()
//   const dataMap = employees.map((e, i) => {
//     if (categories === "lastName") {
//       return { i, value: e.lastName.toLowerCase()}
//     } else if (categories === "birth") { 
//       return { i, value: e.birth} 
//     } else if (categories === "state") { 
//       return { i, value: e.state} 
//     } else if (categories === "dateStart") { 
//       return { i, value: e.dateStart}    
//     } else if (categories === "department") {
//       return { i, value: e.department}
//     }
//   });

//   const sortIncreasing = () => {
//       dataMap.sort((a, b) => {
//         return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
//     });
//     const resultIncreasing = dataMap.map((v) => data[v.i]);
//     setData(resultIncreasing);        
//     return resultIncreasing;
//   };

//   const sortDescending = () => {
//       dataMap.sort((a, b) => {
//         return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
//     });  
//     const resultDescending = dataMap.map((v) => data[v.i]);
//     setData(resultDescending); 
//     return resultDescending;
//   };

//     return (
//       <div>
//         <div className="chevronUp" dataset={categories} onClick={(e)=> {
//           const category = e.target.attributes.dataset.value;
//           console.log(category);
//           return sortIncreasing()}}>▲</div>

//         <div className="chevronDown" dataset={categories} onClick={(e)=> {
//           const category = e.target.attributes.dataset.value;
//           console.log(category);
//           return sortDescending()}}>▲</div>
//       </div>
//     )
// }