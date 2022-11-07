/** IMPORT REACT REDUX */
import { createSlice } from "@reduxjs/toolkit";
/** DATA */
import { DATA_MOCK, DATA_MOCK_CATEGORIES } from "../data/data_mock";

const initialState = {
  data: DATA_MOCK,
  categories: DATA_MOCK_CATEGORIES,
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
