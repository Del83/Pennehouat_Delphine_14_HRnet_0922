/** IMPORT REACT REDUX */
import { createSlice } from "@reduxjs/toolkit";
/** DATA */
import { EMPLOYEES_DATA } from "../data/employees";

const initialState = {
  data: EMPLOYEES_DATA,
};

export const employeesSlice = createSlice({
  name: "employeeList",
  initialState,
  reducers: { 
    addEmployee: (state, action) => {
      const employees = state.data;
      console.log(state.data);
      employees.push(action.payload);
      console.log(employees);
      return state;
    }
  },
});

export const {
  addEmployee,
} = employeesSlice.actions;
