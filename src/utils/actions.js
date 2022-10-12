const tableManagement = {
  goPreviousPage: (state) => {
    state.currentPage--;
    return state;
  },
  goNextPage: (state) => {
    state.currentPage++;
    return state;
  },
  showPerPage: (state, action) => {
    state.employeesPerPage = action.payload;
    return state;
  },
  sortIncreasing: (state, action) => {
    const categories = action.payload;
    const employees = state.data;
    const dataMap = employees.map((e, i) => {
      if (categories === "lastName") {
        return { i, value: e.lastName.toLowerCase() };
      } else if (categories === "birth") {
        return { i, value: e.birth };
      } else if (categories === "state") {
        return { i, value: e.state };
      } else if (categories === "dateStart") {
        return { i, value: e.dateStart };
      } else if (categories === "department") {
        return { i, value: e.department };
      }
    });
    dataMap.sort((a, b) => {
      return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
    });
    const resultIncreasing = dataMap.map((v) => state.data[v.i]);
    state.data = resultIncreasing;
    return state;
  },
  sortDescending: (state, action) => {
    const categories = action.payload;
    const employees = state.data;
    const dataMap = employees.map((e, i) => {
      if (categories === "lastName") {
        return { i, value: e.lastName.toLowerCase() };
      } else if (categories === "birth") {
        return { i, value: e.birth };
      } else if (categories === "state") {
        return { i, value: e.state };
      } else if (categories === "dateStart") {
        return { i, value: e.dateStart };
      } else if (categories === "department") {
        return { i, value: e.department };
      }
    });
    dataMap.sort((a, b) => {
      return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
    });
    const resultDescending = dataMap.map((v) => state.data[v.i]);
    state.data = resultDescending;
    return state;
  },
  searchData: (state, action) => {
    let arrayFilter = [];
    const employees = state.data;
    if (action.payload.length >= 2) {
      employees
        .filter((employee) => {
          return (
            employee.firstName
              .toLowerCase()
              .includes(state.searchInput.toLowerCase()) ||
            employee.lastName
              .toLowerCase()
              .includes(state.searchInput.toLowerCase()) ||
            employee.department
              .toLowerCase()
              .includes(state.searchInput.toLowerCase())
          );
        })
        .map((employee) => {
          arrayFilter.push(employee);
          return (state.data = arrayFilter);
        });
    } else {
      state.data = employees;
    }
    state.searchInput = action.payload;
    return state;
  },
};

export default tableManagement;
