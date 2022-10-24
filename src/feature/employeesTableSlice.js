/** IMPORT REACT REDUX */
import { createSlice } from "@reduxjs/toolkit";

/** DATA et ACTIONS */
import tableManagement from "./actionsTable";
import { EMPLOYEES_DATA } from "../data/employees";

const initialState = {
  data: EMPLOYEES_DATA,
  currentPage: 1,
  employeesPerPage: 10,
  searchInput: "",
  categories: ["Name", "Date of birth", "Address", "Date start", "Department"],
};

export const employeesTableSlice = createSlice({
  name: "employeeList",
  initialState,
  reducers: tableManagement,
});

export const {
  goPreviousPage,
  goNextPage,
  showPerPage,
  sortIncreasing,
  sortDescending,
  searchData,
  addEmployee,
} = employeesTableSlice.actions;
