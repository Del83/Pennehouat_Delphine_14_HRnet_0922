/** IMPORT REACT REDUX */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/** IMPORT COMPONENTS */
import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Footer from "../components/layout/footer";
import Modal from "@del83/plugin_modal_p14/dist";
import Table from "@del83/plugin_table_p14/dist";

/**
 * employee list page
 * @returns {JS} the page to see the list of employees
 */
export default function EmployeesList() {
  const employees = useSelector((state) => state.employeeList.data);
  const categories = useSelector((state) => state.employeeList.categories);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = itemsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [dataSorted, setDataSorted] = useState(employees);
  const [dataFiltered, setDataFiltered] = useState(employees);
  const [searchBar, setSearchBar] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  useEffect(() => {
    if (!searchBar) {
      setCurrentItems(dataSorted.slice(indexOfFirstItem, indexOfLastItem));
    } else if (searchBar) {
      setCurrentItems(dataFiltered.slice(indexOfFirstItem, indexOfLastItem));
    }
    if (dataFiltered.length === 0) {
      setDisplayModal(true);
      setSearchInput("");
      setSearchBar(false);
      setDataFiltered(employees);
      setDataSorted(employees);
      return setMessageModal("No result");
    }
  }, [
    dataFiltered,
    dataSorted,
    employees,
    searchBar,
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
  ]);

  return (
    <div>
      <Header />
      <Side />
      <Table
        dataSorted={dataSorted}
        setDataSorted={setDataSorted}
        dataFiltered={dataFiltered}
        setDataFiltered={setDataFiltered}
        searchBar={searchBar}
        setSearchBar={setSearchBar}
        currentItems={currentItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        categories={categories}
        setSelect={setItemsPerPage}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        className={"table-control-show"}
        classContent={"table-content-show"}
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
