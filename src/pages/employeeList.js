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
  const categories = [
    "Name",
    "Date of birth",
    "Address",
    "Date start",
    "Department",
  ];

  const employees = useSelector((state) => state.employeeList.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = itemsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [dataSorted, setDataSorted] = useState(employees);
  const [searchBar, setSearchBar] = useState(false);
  let [dataFiltered, setDataFiltered] = useState(employees);
  const [currentItems, setCurrentItems] = useState([]);
  //let currentItems;

  const dataNoFilter = employees;
  const [searchInput, setSearchInput] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  useEffect(() => {
    if (!searchBar) {
      setCurrentItems(dataSorted.slice(indexOfFirstItem, indexOfLastItem));
    } else if (searchBar) {
      if (currentPage !== 1) {
        setCurrentPage(1);
        setCurrentItems(dataFiltered.slice(indexOfFirstItem, indexOfLastItem));
      } else {
        setCurrentItems(dataFiltered.slice(indexOfFirstItem, indexOfLastItem));
      }
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
        dataNoFilter={dataNoFilter}
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

//const [data, setData] = useState(employees);
//const [currentItems, setCurrentItems] = useState([]);
//const [sorted, setSorted] = useState(false);
// useEffect(() => {
//   if (searchInput === "") {
//     setData(dataSorted);
//     setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
//   } else {
//     if (currentPage !== 1) {
//       setCurrentPage(1);
//       //setDataFiltered(dataSorted)
//       //setData(dataFiltered);
//       //setDataSorted(dataFiltered);
//       setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
//     } else {
//       //setData(dataFiltered);
//       //setDataSorted(dataFiltered);
//       //setData(dataSorted);
//       setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
//     }
//     if (data.length === 0) {
//       setDisplayModal(true);
//       setSearchInput("");
//       return setMessageModal("No result");
//     }
//   }
// }, [
//   currentPage,
//   searchInput,
//   dataSorted,
//   data,
//   dataNoFilter,
//   indexOfFirstItem,
//   indexOfLastItem,
//   employees.length,
//   dataFiltered,
//   searchBar,
// ]);

// export default function EmployeesList() {
//   const employees = useSelector((state) => state.employeeList.data);
//   const categories = [
//     "Name",
//     "Date of birth",
//     "Address",
//     "Date start",
//     "Department",
//   ];
//   const dataNoFilter = employees;
//   const [data, setData] = useState(employees);

//   const [dataSorted, setDataSorted] = useState(employees);
//   const [sorted, setSorted] = useState(false);
//   const [dataFiltered, setDataFiltered] = useState(employees);
//   const [filtered, setFiltered] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [searchInput, setSearchInput] = useState("");
//   const indexOfLastItem = itemsPerPage * currentPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const [currentItems, setCurrentItems] = useState([]);
//   const [displayModal, setDisplayModal] = useState(false);
//   const [messageModal, setMessageModal] = useState("");

//   useEffect(() => {
//     if (searchInput === "") {
//       setData(dataSorted);
//       setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
//     } else {
//       if (currentPage !== 1) {
//         setCurrentPage(1);
//         //setDataFiltered(dataSorted)
//         //setData(dataFiltered);
//         //setDataSorted(dataFiltered);
//         setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
//       } else {
//         //setData(dataFiltered);
//         //setDataSorted(dataFiltered);
//         //setData(dataSorted);
//         setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
//       }
//       if (data.length === 0) {
//         setDisplayModal(true);
//         setSearchInput("");
//         return setMessageModal("No result");
//       }
//     }
//   }, [
//     currentPage,
//     searchInput,
//     dataSorted,
//     data,
//     dataNoFilter,
//     indexOfFirstItem,
//     indexOfLastItem,
//     employees.length,
//     dataFiltered,
//     filtered,
//   ]);

//   console.log(data);

//   return (
//     <div>
//       <Header />
//       <Side />
//       <Table
//         dataNoFilter={dataNoFilter}
//         data={data}
//         setData={setData}
//         dataSorted={dataSorted}
//         setDataSorted={setDataSorted}
//         dataFiltered={dataFiltered}
//         setDataFiltered={setDataFiltered}
//         sorted={sorted}
//         setSorted={setSorted}
//         filtered={filtered}
//         setFiltered={setFiltered}
//         currentItems={currentItems}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         itemsPerPage={itemsPerPage}
//         categories={categories}
//         setSelect={setItemsPerPage}
//         searchInput={searchInput}
//         setSearchInput={setSearchInput}
//         className={"form-control-show"}
//         classContent={"form-content-show"}
//         classChevron={"chevron-show"}
//       />
//       <Footer />
//       <Modal
//         displayModal={displayModal}
//         setDisplayModal={setDisplayModal}
//         messageModal={messageModal}
//       />
//     </div>
//   );
// }
