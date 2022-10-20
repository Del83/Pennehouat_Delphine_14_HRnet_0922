import { useSelector } from "react-redux"

import EntriesDisplayed from "./tableDisplay";
import SearchInTable from "./tableSearch";
import SortTable from "./tableSort";
import PagedOfTable from "./tablePagination";

import "../../styles/table.css";

// const dateConvert = (date) => {
//     const slice1 = date.slice(0, 4);
//     const slice2 = date.slice(5, 10);
//     return slice2 + "/" + slice1;
//   };

  const dateConvert = (date) => {
    const slice1 = date.slice(0, 4);
    const slice2 = date.slice(5, 7);
    const slice3 = date.slice(8,10)
    return slice3 + "/" + slice2 + "/" + slice1;
  };

export default function Table() {
    const employees = useSelector((state) => state.employeeList.data);
    const currentPage = useSelector((state) => state.employeeList.currentPage) 
    const employeesPerPage = useSelector((state) => state.employeeList.employeesPerPage) 
    const indexOfLastEmployee = employeesPerPage * currentPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    console.log(employees);
  return (
      <section className="form-background flex-column">
            <section className="table-layout-ctn">
                <EntriesDisplayed/>
                <SearchInTable/>
            </section>
        <table className="table-ctn">
            <thead>
                <tr>
                <th scope="col">Name <SortTable categories="lastName"/></th>
                <th scope="col">Date of birth <SortTable categories="birth"/></th>
                <th scope="col">Address <SortTable categories="state"/></th>
                <th scope="col">Date Start <SortTable categories="startDate"/></th>
                <th scope="col">Department <SortTable categories="department"/></th>
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
        <PagedOfTable/>
      </section>
   
  );
}