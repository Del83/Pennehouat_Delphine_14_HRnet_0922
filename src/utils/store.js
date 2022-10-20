import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { employeesTableSlice } from "./getEmployees";
import { createEmployeeSlice } from "./postEmployees";
import { handleInput } from "../utils/postEmployees";

const reducer = combineReducers({
  employeeList: employeesTableSlice.reducer,
  createEmployee: createEmployeeSlice.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: handleInput,
      },
    }),
});

// export const store = configureStore({
//   reducer: {
//     employeeList: employeesTableSlice.reducer,
//     createEmployee: createEmployeeSlice.reducer,
//   },
// });
