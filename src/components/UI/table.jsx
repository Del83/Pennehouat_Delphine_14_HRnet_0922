/** COMPONENTS */
import Display from "./tableDisplay";
import Search from "./tableSearch";
import Sorting from "./tableSorting";
import Paging from "./tablePaging";

/** STYLE */
import "../../styles/table.css";

export default function Table({
  dataSorted,
  setDataSorted,
  dataFiltered,
  setDataFiltered,
  currentItems,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchInput,
  setSearchInput,
  categories,
  setSelect,
  searchBar,
  setSearchBar,
  className,
  classContent,
  classChevron,
}) {
  /** CONVERT DATE FOR A DISPLAY */
  const dateConvert = (date) => {
    const slice1 = date.slice(0, 4);
    const slice2 = date.slice(5, 7);
    const slice3 = date.slice(8, 10);
    return slice3 + "/" + slice2 + "/" + slice1;
  };

  /** LIST OF NUMBER OF ENTRIES PER PAGE */
  const numberEntries = [10, 15, 30];

  /** MANAGE SEARCH BAR */
  const handleSearchInput = (e) => {
    const inputContent = e.target.value
      .toLowerCase()
      .replace(/\s/g, "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
    setSearchInput(inputContent);
    if (inputContent.length === 0) {
      setSearchBar(false);
      setDataFiltered(dataSorted);
    }
    if (inputContent.length >= 3) {
      const dataFilter = dataSorted.filter((item) => {
        return (
          item.firstName.toLowerCase().includes(inputContent.toLowerCase()) ||
          item.lastName.toLowerCase().includes(inputContent.toLowerCase()) ||
          item.department.toLowerCase().includes(inputContent.toLowerCase())
        );
      });
      setSearchBar(true);
      return setDataFiltered(dataFilter);
    }
  };

  /** MANAGE SORTING */
  const titleKind = {
    Name: "lastName",
    "Date of birth": "birth",
    Address: "state",
    "Date start": "startDate",
    Department: "department",
  };

  const sortIncreasing = (category) => {
    var _ = require("lodash");
    if (searchBar) {
      const sortedList = _.sortBy(dataFiltered, titleKind[`${category}`]);
      return setDataFiltered(sortedList);
    } else if (!searchBar) {
      const sortedList = _.sortBy(dataSorted, titleKind[`${category}`]);
      return setDataSorted(sortedList);
    }
  };

  const sortDescending = (category) => {
    var _ = require("lodash");
    if (searchBar) {
      const sortedList = _.sortBy(
        dataFiltered,
        titleKind[`${category}`]
      ).reverse();
      return setDataFiltered(sortedList);
    } else if (!searchBar) {
      const sortedList = _.sortBy(
        dataSorted,
        titleKind[`${category}`]
      ).reverse();
      return setDataSorted(sortedList);
    }
  };

  /** MANAGE PAGE SYSTEM */
  const pageNumbers = [];

  const itemsTotal = () => {
    if (searchBar) {
      return dataFiltered.length;
    } else if (!searchBar) {
      return dataSorted.length;
    }
  };

  for (let i = 1; i <= Math.ceil(itemsTotal() / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goPreviousPage = () => {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  };
  const goNextPage = () => {
    console.log(currentPage);
    currentPage !== pageNumbers.length && setCurrentPage(currentPage + 1);
  };

  return (
    <section className="form-background flex-column">
      <section className="table-layout-ctn">
        <Display
          itemsPerPage={itemsPerPage}
          setSelect={setSelect}
          numberEntries={numberEntries}
          className={className}
          classContent={classContent}
          classChevron={classChevron}
        />
        <Search
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
        />
      </section>
      <table className="table-ctn">
        <thead>
          <tr>
            {categories.map((category, index) => (
              <th key={index} scope="col">
                {category}{" "}
                <Sorting
                  categories={category}
                  sortIncreasing={sortIncreasing}
                  sortDescending={sortDescending}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee, index) => (
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
      <Paging
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        itemsTotal={itemsTotal}
        goPreviousPage={goPreviousPage}
        goNextPage={goNextPage}
      />
    </section>
  );
}

// const sortDescending = (category) => {
//   var _ = require("lodash");
//   var sortedList = _.sortBy(data, titleKind[`${category}`]).reverse();
//   setSorted(true);
//   //return setDataSorted(sortedList);
//   return setData(sortedList);
// };

// const sortDescending = (category) => {
//   const dataMap = data.map((e, i) => {
//     if (category === "Name") {
//       return { i, value: e.lastName.toLowerCase() };
//     } else if (category === "Date of birth") {
//       return { i, value: e.birth };
//     } else if (category === "Address") {
//       return { i, value: e.state };
//     } else if (category === "Date start") {
//       return { i, value: e.startDate };
//     } else if (category === "Department") {
//       return { i, value: e.department };
//     }
//     return console.log("error");
//   });

//   dataMap.sort((a, b) =>
//     a.value > b.value ? -1 : a.value < b.value ? 1 : 0
//   );
//   const resultDescending = dataMap.map((v) => data[v.i]);
//   setData(resultDescending);
//   return;
// };

// const sortIncreasing = (category) => {
//   const dataMap = data.map((e, i) => {
//     if (category === "Name") {
//       return { i, value: e.lastName.toLowerCase() };
//     } else if (category === "Date of birth") {
//       return { i, value: e.birth };
//     } else if (category === "Address") {
//       return { i, value: e.state };
//     } else if (category === "Date start") {
//       return { i, value: e.startDate };
//     } else if (category === "Department") {
//       return { i, value: e.department };
//     }
//     return console.log("error");
//   });
//   dataMap.sort((a, b) => {
//     return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
//   });
//   const resultIncreasing = dataMap.map((v) => data[v.i]);
//   setDataSorted(true);
//   setData(resultIncreasing);
//   return;
// };
