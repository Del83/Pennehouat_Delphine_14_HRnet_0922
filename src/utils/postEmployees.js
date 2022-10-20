import { createSlice } from "@reduxjs/toolkit";
// DATA et ACTIONS
import formManagement from "./actionsForm";

const initialState = {
  firstName: {
    value: "",
    name: "firstName",
    error: null,
    valid: null,
  },
  lastName: {
    value: "",
    name: "lastName",
    error: null,
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
    error: null,
    valid: null,
  },
  city: {
    value: "",
    name: "city",
    error: null,
    valid: null,
  },
  state: {
    value: "",
    select: "",
    name: "state",
    error: null,
    valid: null,
  },
  zipCode: {
    value: "",
    name: "zipCode",
    error: null,
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
  modal: {
    display: false,
  },
};

export const createEmployeeSlice = createSlice({
  name: "createEmployee",
  initialState,
  reducers: formManagement,
});

export const { handleInput, selectItem, handleDate, openModal, reset } =
  createEmployeeSlice.actions;
