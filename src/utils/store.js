import { configureStore } from "@reduxjs/toolkit";
import { employeesTableSlice } from "./getEmployees";

export const store = configureStore({
  reducer: {
    employeeList: employeesTableSlice.reducer,
  },
});
