/** IMPORT REACT REDUX */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/** IMPORT COMPONENTS */
import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Table from "../components/UI/table";
import Footer from "../components/layout/footer";
import Modal from "@del83/plugin_modal_p14/dist";
//import Modal from "../components/UI/modal";

/** STYLE */
import "../styles/table.css";

export default function EmployeesList() {
  const employees = useSelector((state) => state.employeeList.data);
  const categories = [
    "Name",
    "Date of birth",
    "Address",
    "Date start",
    "Department",
  ];
  const dataNoFilter = employees;
  const [data, setData] = useState(employees);

  const [dataSort, setDataSort] = useState(employees);
  const [sorted, setSorted] = useState(false);
  const [dataFilter, setDataFilter] = useState(employees);
  const [filtered, setFiltered] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const indexOfLastItem = itemsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  useEffect(() => {
    if (searchInput === "") {
      setData(dataSort);
      setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
    } else {
      if (currentPage !== 1) {
        setCurrentPage(1);
        //setDataFilter(dataSort)
        //setData(dataFilter);
        //setDataSort(dataFilter);
        setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
      } else {
        //setData(dataFilter);
        //setDataSort(dataFilter);
        //setData(dataSort);
        setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
      }
      if (data.length === 0) {
        setDisplayModal(true);
        setSearchInput("");
        return setMessageModal("No result");
      }
    }
  }, [
    currentPage,
    searchInput,
    dataSort,
    data,
    dataNoFilter,
    indexOfFirstItem,
    indexOfLastItem,
    employees.length,
    dataFilter,
    filtered,
  ]);

  console.log(data);

  return (
    <div>
      <Header />
      <Side />
      <Table
        dataNoFilter={dataNoFilter}
        data={data}
        setData={setData}
        dataSort={dataSort}
        setDataSort={setDataSort}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        sorted={sorted}
        setSorted={setSorted}
        filtered={filtered}
        setFiltered={setFiltered}
        currentItems={currentItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        categories={categories}
        setSelect={setItemsPerPage}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        className={"form-control-show"}
        classContent={"form-content-show"}
        classChevron={"chevron-show"}
      />
      <Footer />
      <Modal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        messageModal={messageModal}
      />
    </div>
  );
}
