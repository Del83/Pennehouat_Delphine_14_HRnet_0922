/** IMPORT REACT REDUX */
import { createSlice } from "@reduxjs/toolkit";
/** DATA */
import { EMPLOYEES_DATA } from "../data/employees";
import { DATA_MOCK } from "../data/data_mock";

const initialState = {
  data: DATA_MOCK,
};

export const employeesSlice = createSlice({
  name: "employeeList",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const employees = state.data;
      employees.push(action.payload);
      return state;
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
