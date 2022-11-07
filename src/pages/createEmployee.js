/** IMPORT REACT REDUX */
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

/** IMPORT ACTIONS */
import { addEmployee } from "../feature/employeesSlice";
import { reset } from "../feature/createEmployeeSlice";
import {
  handleDate,
  handleInput,
  selectItem,
} from "../feature/createEmployeeSlice";

/** IMPORT COMPONENTS LAYOUT */
import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Footer from "../components/layout/footer";
import Modal from "@del83/plugin_modal_p14/dist";

/** IMPORT COMPONENTS UI */
import InputText from "../components/UI/input-text";
import InputDropdown from "../components/UI/input-dropdown";
import InputDate from "../components/UI/input-date";

/** IMPORT DATA */
import { STATES_LIST } from "../data/states";
import { DEPARTMENTS_LIST } from "../data/departments";

/** STYLE */
import "../styles/create.css";
import "../styles/date.css";

/**
 * Employee create page
 * @returns {JS} the page to create an employee
 */
export default function CreateEmployee() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeeList.data);
  const inputState = useSelector((state) => state.createEmployee);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const statesList = [];
  const departmentsList = [];

  const getItem = (listItems, listArray) => {
    listItems.map((item) => listArray.push(item.name));
  };
  getItem(STATES_LIST, statesList);
  getItem(DEPARTMENTS_LIST, departmentsList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeSheet = {
      id: employees.length + 100,
      firstName: inputState.firstName.value,
      lastName: inputState.lastName.value,
      birth: inputState.birth.value,
      startDate: inputState.startDate.value,
      street: inputState.street.value,
      city: inputState.city.value,
      state: inputState.state.value,
      zipCode: inputState.zipCode.value,
      department: inputState.department.value,
    };
    if (formValid) {
      dispatch(addEmployee(employeeSheet));
      setDisplayModal(true);
      setFormValid(false);
      setMessageModal("Employee Created !");
      dispatch(reset());
      return;
    }
    setDisplayModal(true);
    setMessageModal("Please fill in all the fields");
    return;
  };

  useEffect(() => {
    dispatch(selectItem(select));
    dispatch(handleInput(input));
    dispatch(handleDate(input));
    const inputsValid = [];
    for (const property in inputState) {
      inputsValid.push(inputState[property].valid);
    }
    if (inputsValid.some((elem) => elem === false || elem === null) === true) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
    return;
  }, [inputState, input, select, dispatch]);

  return (
    <div className="create-employee">
      <Header />
      <Side />

      <div className="form-background">
        <form className="form-ctn" onSubmit={handleSubmit}>
          <section className="identity">
            <h4>Identity of the employee</h4>
            <div className="form-identity">
              <InputText
                label="First name"
                name="firstName"
                type="text"
                value={inputState.firstName.value}
                valid={inputState.firstName.valid}
                input={inputState.firstName.value}
                className="form-control"
                setInput={setInput}
              />
              <InputText
                label="Last name"
                name="lastName"
                type="text"
                value={inputState.lastName.value}
                valid={inputState.lastName.valid}
                input={inputState.lastName.value}
                className="form-control"
                setInput={setInput}
              />
              <InputDate
                label="Date of birth"
                name="birth"
                max={new Date(2004, 11, 31)}
                defaultValue={new Date(2004, 11, 31)}
                valid={inputState.birth.valid}
                input={inputState.birth.value}
                setInput={setInput}
              />
            </div>
          </section>
          <section className="address">
            <h4>Address of the employee</h4>
            <div className="form-address">
              <InputText
                label="Street"
                name="street"
                type="text"
                value={inputState.street.value}
                valid={inputState.street.valid}
                input={inputState.street.value}
                className="form-control"
                setInput={setInput}
              />
              <InputText
                label="City"
                name="city"
                type="text"
                value={inputState.city.value}
                valid={inputState.city.valid}
                input={inputState.city.value}
                className="form-control"
                setInput={setInput}
              />
              <InputDropdown
                label="State"
                name="state"
                value={inputState.state.value}
                valid={inputState.state.valid}
                input={inputState.state.value}
                className="form-control"
                classContent="dropdown-content"
                classChevron="chevron"
                list={statesList}
                setInput={setInput}
                setSelect={setSelect}
              />
              <InputText
                label="Zip Code"
                name="zipCode"
                type="number"
                value={inputState.zipCode.value}
                valid={inputState.zipCode.valid}
                input={inputState.zipCode.value}
                className="form-control"
                setInput={setInput}
              />
            </div>
          </section>
          <section className="information">
            <h4>Employee information</h4>
            <div className="form-information">
              <InputDate
                label="Start date"
                name="startDate"
                max={new Date()}
                defaultValue={new Date()}
                valid={inputState.startDate.valid}
                input={inputState.startDate.value}
                setInput={setInput}
              />
              <InputDropdown
                label="Department"
                name="department"
                value={inputState.department.value}
                valid={inputState.department.valid}
                input={inputState.department.value}
                className="form-control"
                classContent="dropdown-content"
                classChevron="chevron"
                list={departmentsList}
                setInput={setInput}
                setSelect={setSelect}
              />
            </div>
          </section>
          <div className="create-button-ctn">
            <button className="create-button">Create employee</button>
          </div>
        </form>
      </div>

      <Footer />
      <Modal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        messageModal={messageModal}
      />
    </div>
  );
}
