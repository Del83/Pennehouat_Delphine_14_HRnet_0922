/** IMPORT REACT REDUX */
import React, { useState } from "react";
import { useSelector } from "react-redux";

/** IMPORT COMPONENTS */
import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Table from "../components/UI/table";
import Footer from "../components/layout/footer";

/** STYLE */
import "../styles/table.css";

export default function EmployeesList() {
  const employees = useSelector((state) => state.employeeList.data);
  const [data, setData ] = useState(employees)
  const categories = ["Name", "Date of birth", "Address", "Date start", "Department"]  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage]  = useState(10)
  
  console.log(employees);
  return (
    <div>
      <Header />
      <Side />
      <Table data={data} setData={setData} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} categories={categories}/>
      <Footer />
    </div>
  );
}
