import { createSlice } from "@reduxjs/toolkit";
import { EMPLOYEES_DATA } from "../data/employees";

export const createEmployeeSlice = createSlice({
  name: "createEmployee",
  initialState: {
    data: EMPLOYEES_DATA,
    valid: null,
    modal: false,
  },
  reducers: {
    validInputText: (state, { payload }) => {
      if (typeof payload === "string") {
        if (payload.match(/^[A-zÀ-ú-,\s]*$/)) {
          state.valid = true;
          return;
        } else {
          state.valid = false;
          return;
        }
      }
      if (typeof payload === "number") {
        if (payload.match(/^(\d{6})?$/)) {
          state.valid = true;
          return;
        } else {
          state.valid = false;
          return;
        }
      }
    },
    addEmployee: (state, { payload }) => {
      state.modal = true;
      state.data.push(payload);
      return state;
    },
  },
});

export const { validInputText, addEmployee } = createEmployeeSlice.actions;
