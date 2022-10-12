import { createSlice } from "@reduxjs/toolkit";
// DATA et ACTIONS
import tableManagement from "./actions";
import { EMPLOYEES_DATA } from "../data/employees";

const initialState = {
  data: EMPLOYEES_DATA,
  currentPage: 1,
  employeesPerPage: 10,
  searchInput: "",
  //error: null,
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
} = employeesTableSlice.actions;
