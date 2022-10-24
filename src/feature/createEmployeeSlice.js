/** IMPORT REACT REDUX */
import { createSlice } from "@reduxjs/toolkit";

/** DATA et ACTIONS */
import formManagement from "./actionsForm";

const initialState = {
  firstName: {
    value: "",
    name: "firstName",
    valid: null,
  },
  lastName: {
    value: "",
    name: "lastName",
    valid: null,
  },
  birth: {
    value: "",
    name: "birth",
    error: null,
    valid: null,
  },
  street: {
    value: "",
    name: "street",
    valid: null,
  },
  city: {
    value: "",
    name: "city",
    valid: null,
  },
  state: {
    value: "",
    select: "",
    name: "state",
    valid: null,
  },
  zipCode: {
    value: "",
    name: "zipCode",
    valid: null,
  },
  startDate: {
    value: "",
    name: "startDate",
    error: null,
    valid: null,
  },
  department: {
    value: "",
    name: "department",
    select: "",
    error: null,
    valid: null,
  },
};

export const createEmployeeSlice = createSlice({
  name: "createEmployee",
  initialState,
  reducers: formManagement,
});

export const { handleInput, selectItem, handleDate, reset } =
  createEmployeeSlice.actions;
