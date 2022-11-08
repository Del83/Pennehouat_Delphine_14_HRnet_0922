/** IMPORT REACT REDUX */
import { configureStore } from "@reduxjs/toolkit";

/** SLICE */
import { employeesSlice } from "../feature/employeesSlice";
import { createEmployeeSlice } from "../feature/createEmployeeSlice";

export const store = configureStore({
  reducer: {
    employeeList: employeesSlice.reducer,
    createEmployee: createEmployeeSlice.reducer,
  },
});
