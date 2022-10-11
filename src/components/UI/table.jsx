import ShowEntries from "./tableShow";
import Search from "./tableSearch";
import SortingChevron from "./tableSort";
import Pagination from "./tablePagination";
import "../../styles/list.css";

const dateConvert = (date) => {
    const slice1 = date.slice(0, 4);
    const slice2 = date.slice(5, 10);
    return slice2 + "/" + slice1;
  };

export default function Table( { employeesPerPage, setEmployeesPerPage, searchInput, setSearchInput, employees, setEmployees, currentEmployees, currentPage, setCurrentPage } ) {
  
  return (
      <section className="form-background flex-column">
        <section className="table-layout-ctn">
          <ShowEntries
            employeePerPage={employeesPerPage}
            setEmployeePerPage={setEmployeesPerPage}
          />
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        </section>

        <table className="table-ctn">
          <thead>
            <tr>
              <th scope="col">
                Name
                <SortingChevron
                  data={employees}
                  setData={setEmployees}
                  categories="lastName"
                />
              </th>
              <th scope="col">
                Date of birth
                <SortingChevron
                  data={employees}
                  setData={setEmployees}
                  categories="birth"
                />
              </th>
              <th scope="col">
                Address
                <SortingChevron
                  data={employees}
                  setData={setEmployees}
                  categories="state"
                />
              </th>
              <th scope="col">
                Date Start
                <SortingChevron
                  data={employees}
                  setData={setEmployees}
                  categories="dateStart"
                />
              </th>
              <th scope="col">
                Department
                <SortingChevron
                  data={employees}
                  setData={setEmployees}
                  categories="department"
                />
              </th>
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
        <Pagination
          employeePerPage={employeesPerPage}
          totalEmployees={employees.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
  );
}