/** IMPORT REACT REDUX */
import { configureStore, combineReducers } from "@reduxjs/toolkit";

/** SLICE */
import { employeesTableSlice } from "../feature/employeesTableSlice";
import { createEmployeeSlice } from "../feature/createEmployeeSlice";
//import { handleInput, handleDate } from "../utils/postEmployees";

const reducer = combineReducers({
  employeeList: employeesTableSlice.reducer,
  createEmployee: createEmployeeSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: {
  //         handleInput,
  //         handleDate,
  //       },
  //     },
  //   }),
});

// export const store = configureStore({
//   reducer: {
//     employeeList: employeesTableSlice.reducer,
//     createEmployee: createEmployeeSlice.reducer,
//   },
// });
