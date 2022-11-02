/** IMPORT REACT REDUX */
import { configureStore, combineReducers } from "@reduxjs/toolkit";

/** SLICE */
import { employeesSlice } from "../feature/employeesSlice";
import { createEmployeeSlice } from "../feature/createEmployeeSlice";

const reducer = combineReducers({
  employeeList: employeesSlice.reducer,
  createEmployee: createEmployeeSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
});

// export const store = configureStore({
//   reducer: {
//     employeeList: employeesTableSlice.reducer,
//     createEmployee: createEmployeeSlice.reducer,
//   },
// });
