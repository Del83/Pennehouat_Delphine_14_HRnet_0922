import { useDispatch, useSelector } from "react-redux"

import TableShowed from "./tableShow";
import TableSearched from "./tableSearch";
import TableSorted from "./tableSort";
import TablePaged from "./tablePagination";

import "../../styles/table.css";

const dateConvert = (date) => {
    const slice1 = date.slice(0, 4);
    const slice2 = date.slice(5, 10);
    return slice2 + "/" + slice1;
  };

export default function Table( {searchInput, setSearchInput } ) {
   
    const employees = useSelector((state) => state.employeeList.data);
    const currentPage = useSelector((state) => state.employeeList.currentPage) 
    const employeesPerPage = useSelector((state) => state.employeeList.employeesPerPage) 
    const indexOfLastEmployee = employeesPerPage * currentPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
      <section className="form-background flex-column">
            <section className="table-layout-ctn">
                <TableShowed/>
                <TableSearched searchInput={searchInput} setSearchInput={setSearchInput} />
            </section>
        <table className="table-ctn">
            <thead>
                <tr>
                <th scope="col">Name <TableSorted categories="lastName"/></th>
                <th scope="col">Date of birth <TableSorted categories="birth"/></th>
                <th scope="col">Address <TableSorted categories="state"/></th>
                <th scope="col">Date Start <TableSorted categories="dateStart"/></th>
                <th scope="col">Department <TableSorted categories="department"/></th>
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
                <td data-label="Start date">
                  {dateConvert(employee.dateStart)}
                </td>
                <td data-label="Department">{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <TablePaged/>
      </section>
   
  );
}