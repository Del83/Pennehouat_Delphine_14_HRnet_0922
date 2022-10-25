/** COMPONENTS */
import Display from "./tableDisplay";
import Search from "./tableSearch";
import Sorting from "./tableSorting";
import Paging from "./tablePaging";
/** STYLE */
import "../../styles/table.css";

export default function Table ( {data, setData, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, categories} ) {

    const indexOfLastEmployee = itemsPerPage * currentPage;
    const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
    const currentEmployees = data.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const dateConvert = (date) => {
        const slice1 = date.slice(0, 4);
        const slice2 = date.slice(5, 7);
        const slice3 = date.slice(8,10)
        return slice3 + "/" + slice2 + "/" + slice1;
      };

  return (
      <section className="form-background flex-column">
            <section className="table-layout-ctn">
                <Display itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage}/>
                <Search  data={data} setData={setData} />
            </section>
        <table className="table-ctn">
            <thead>
                <tr>
                {categories.map((category, index) => (                 
                    <th key={index} scope="col">{category} <Sorting data={data} setData={setData} categories={category}/></th>
                ))}
                </tr>
            </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr key={index}>
                <td data-label="name">
                  {employee.firstName + " " + employee.lastName.toUpperCase()}
                </td>
                <td data-label="Birth">{dateConvert(employee.birth)}</td>
                <td data-label="Address">
                  <div>
                    <div>{employee.street + " " + employee.city}</div>
                    <div>{employee.state + " " + employee.zipCode}</div>
                  </div>
                </td>
                <td data-label="Start date">{dateConvert(employee.startDate)}</td>
                <td data-label="Department">{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paging currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} itemsTotal={data.length}/>
      </section>
   
  );
}


// export default function Table({data}) {
//   //const employees = useSelector((state) => state.employeeList.data);
//   const categories = useSelector((state) => state.employeeList.categories)    
//   //const currentPage = useSelector((state) => state.employeeList.currentPage) 
//   //const itemsPerPage = useSelector((state) => state.employeeList.itemsPerPage) 
//   const [employees, setEmployees ] = useState(data)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage, setItemsPerPage]  = useState(10)

//   const indexOfLastEmployee = itemsPerPage * currentPage;
//   const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
//   const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

// return (
//     <section className="form-background flex-column">
//           <section className="table-layout-ctn">
//               <Display/>
//               <Search/>
//           </section>
//       <table className="table-ctn">
//           <thead>
//               <tr>
//               {categories.map((category, index) => (                 
//                   <th key={index} scope="col">{category} <Sorting data={employees} categories={category}/></th>
//               ))}
//               </tr>
//           </thead>
//         <tbody>
//           {currentEmployees.map((employee, index) => (
//             <tr key={index}>
//               <td data-label="name">
//                 {employee.firstName + " " + employee.lastName.toUpperCase()}
//               </td>
//               <td data-label="Birth">{dateConvert(employee.birth)}</td>
//               <td data-label="Address">
//                 <div>
//                   <div>{employee.street + " " + employee.city}</div>
//                   <div>{employee.state + " " + employee.zipCode}</div>
//                 </div>
//               </td>
//               <td data-label="Start date">{dateConvert(employee.startDate)}</td>
//               <td data-label="Department">{employee.department}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Paging currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} itemsTotal={employees.length}/>
//     </section>
 
// );
// }