import React, { useState, useEffect } from "react";

import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Table from "../components/UI/table";
import Footer from "../components/layout/footer";

import { EMPLOYEES_DATA } from "../data/employees";
import "../styles/list.css";

export default function EmployeesList() {
  const [employees, setEmployees] = useState(EMPLOYEES_DATA);
  const [employeesFilter, setEmployeesFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const [currentEmployees, setCurrentEmployees] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let arrayFilter = [];

  useEffect(() => {
    if (searchInput.length >= 2) {
      employees
        .filter((employee) => {
          return (
            employee.firstName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            employee.lastName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            employee.department
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          );
        })
        .map((employee) => {
          arrayFilter.push(employee);
          return setEmployeesFilter(arrayFilter);
        });
    } else {
      setEmployeesFilter(employees);
    }
  }, [employees, searchInput]);

  useEffect(() => {
    setCurrentEmployees(
      employeesFilter.slice(indexOfFirstEmployee, indexOfLastEmployee)
    );
  }, [indexOfFirstEmployee, indexOfLastEmployee, employeesFilter, searchInput]);

  return (
    <div>
      <Header />
      <Side />
      <Table
        employeesPerPage={employeesPerPage}
        setEmployeesPerPage={setEmployeesPerPage}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        employees={employees}
        setEmployees={setEmployees}
        currentEmployees={currentEmployees}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
}
