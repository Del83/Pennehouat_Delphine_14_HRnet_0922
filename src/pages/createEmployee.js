/** IMPORT REACT REDUX */
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

/** IMPORT UTILS */
import { addEmployee } from "../feature/employeesTableSlice";
import { reset } from "../feature/createEmployeeSlice";
//import { addEmployee, validInputText } from "../app/createEmployeeSlice";

/** IMPORT COMPONENTS UI */
import InputText from "../components/UI/form/input-text";
import InputDropdown from "../components/UI/form/input-dropdown";
import InputDate from "../components/UI/form/input-date";

/** IMPORT DATA */
import { STATES_LIST } from "../data/states";
import { DEPARTMENTS_LIST } from "../data/departments";

/** IMPORT COMPONENTS LAYOUT */
import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Footer from "../components/layout/footer";
//import Modal from "../components/UI/modal";

/** STYLE */
import "../styles/create.css";

import Modal from "@del83/plugin_modal_p14/dist";

//console.log(Modal);

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeeList.data);
  const inputState = useSelector((state) => state.createEmployee);
  const [displayModal, setDisplayModal] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [messageModal, setMessageModal] = useState("");

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
      setMessageModal("Employee Created !");
      dispatch(reset());
      return;
    }
    setDisplayModal(true);
    setMessageModal("Please fill in all the fields");
    return;
  };

  useEffect(() => {
    const inputsValid = [];
    //const inputsValue = [];
    for (const property in inputState) {
      inputsValid.push(inputState[property].valid);
      if (
        inputsValid.some((elem) => elem === false || elem === null) === true
      ) {
        setFormValid(false);
        return;
      }
      setFormValid(true);
    }
  }, [inputState]);

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
                messageError={inputState.firstName.error}
                dataInput={inputState.firstName}
              />
              <InputText
                label="Last name"
                name="lastName"
                type="text"
                value={inputState.lastName.value}
                valid={inputState.lastName.valid}
                messageError={inputState.lastName.error}
                dataInput={inputState.lastName}
              />
              <InputDate
                label="Date of birth"
                name="birth"
                max={new Date(2004, 11, 31)}
                defaultValue={new Date(2004, 11, 31)}
                valid={inputState.birth.valid}
                messageError={inputState.birth.error}
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
                messageError={inputState.street.error}
                dataInput={inputState.street}
              />
              <InputText
                label="City"
                name="city"
                type="text"
                value={inputState.city.value}
                valid={inputState.city.valid}
                messageError={inputState.city.error}
                dataInput={inputState.city}
              />
              <InputDropdown
                label="State"
                name="state"
                value={inputState.state.value}
                valid={inputState.state.valid}
                dataInput={inputState.state}
                list={STATES_LIST}
              />
              <InputText
                label="Zip Code"
                name="zipCode"
                type="number"
                value={inputState.zipCode.value}
                valid={inputState.zipCode.valid}
                messageError={inputState.zipCode.error}
                dataInput={inputState.zipCode}
              />
            </div>
          </section>

          <section className="information">
            <h4>Employee information</h4>
            <div className="form-information">
              <div className="form-profile-start-date">
                <InputDate
                  label="Start date"
                  name="startDate"
                  max={new Date()}
                  defaultValue={new Date()}
                  messageError={inputState.startDate.error}
                  valid={inputState.startDate.valid}
                />
              </div>
              <div className="form-department">
                <InputDropdown
                  label="Department"
                  name="department"
                  value={inputState.department.value}
                  valid={inputState.department.valid}
                  dataInput={inputState.department}
                  list={DEPARTMENTS_LIST}
                />
              </div>
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

// useEffect(() => {
//   const inputsValid = [];
//   const inputsValue = [];
//   for (const property in inputState) {
//     inputsValid.push(inputState[property].valid);
//     inputsValue.push(inputState[property].value);
//     console.log(inputState[property].valid);
//     if (
//       //inputsValid.some((input) => input === false) === true
//       inputsValid.every((input) => input === true) === false
//       //inputsValue.some((input) => input === "") === true &&
//       //inputsValue.some((input) => input.length <= 3) === true
//     ) {
//       console.log("hohohohoh");
//       console.log(inputsValid);
//       setFormValid(false);
//       //console.log(inputState[property].error);
//       return;
//     }
//     console.log(inputsValid);
//     console.log("hihihihih");
//     setFormValid(true);
//     return;
//   }
// }, [inputState]);

// const validForm = () => {
//   const inputsValid = [];
//   const inputsValue = [];
//   for (const property in inputState) {
//     inputsValid.push(inputState[property].valid);
//     inputsValue.push(inputState[property].value);
//     if (
//           inputsValid.some((input) => input === false) ||
//           inputsValue.some((input) => input === "") ||
//           inputsValue.some((input) => input.length <= 3)
//         ) {
//           console.log("hohohohoh");
//           console.log(inputState[property].error);
//           return setFormValid(false);
//         }
//         console.log("hihihihih");
//         return setFormValid(true);
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const inputsValid = [];
//   const inputsValue = [];

//   if (formValid) {
//     const employeeSheet = {
//       id: employees.length + 100,
//       firstName: inputState.firstName.value,
//       lastName: inputState.lastName.value,
//       birth: inputState.birth.value,
//       startDate: inputState.startDate.value,
//       street: inputState.street.value,
//       city: inputState.city.value,
//       state: inputState.state.value,
//       zipCode: inputState.zipCode.value,
//       department: inputState.department.value,
//     };

//     for (const property in inputState) {
//       inputsValid.push(inputState[property].valid);
//       inputsValue.push(inputState[property].value);
//       console.log(inputsValue);
//       if (!validForm) {
//         console.log(inputState[property].error);
//         console.log("valid not ok");
//         return;
//       }
//       console.log("ok valid");
//     }
//     dispatch(addEmployee(employeeSheet));
//     dispatch(reset());
//     setDisplayModal(true);
//   } else {
//     console.log("form invalid");
//   }
// };

// useEffect(() => {
//   const inputsValid = [];
//   const inputsValue = [];
//   for (const property in inputState) {
//     inputsValid.push(inputState[property].valid);
//     inputsValue.push(inputState[property].value);
//     console.log(inputsValue);
//     if (
//       inputsValid.some((input) => input === false) === true ||
//       inputsValue.some((input) => input === "") === true
//     ) {
//       console.log(inputState[property].error);
//       console.log("valid not ok");
//       setFormValid(false);
//       return;
//     }
//     setFormValid(true);
//     console.log("ok valid");
//   }
// }, [inputState]);

// const firstName = useSelector((state) => state.createEmployee.firstName);
// const lastName = useSelector((state) => state.createEmployee.lastName);
// const birth = useSelector((state) => state.createEmployee.birth);
// const street = useSelector((state) => state.createEmployee.street);
// const city = useSelector((state) => state.createEmployee.city);
// const state = useSelector((state) => state.createEmployee.state);
// const zipCode = useSelector((state) => state.createEmployee.zipCode);
// const startDate = useSelector((state) => state.createEmployee.startDate);
// const department = useSelector((state) => state.createEmployee.department);

//const validForm = () => {
//   if (
//     firstName.valid === true &&
//     lastName.valid === true &&
//     birth.valid === true &&
//     street.valid === true &&
//     city.valid === true &&
//     state.valid === true &&
//     zipCode.valid === true &&
//     startDate.valid === true &&
//     department.valid === true &&
//     department !== "" &&
//     state !== "" &&
//     birth !== "" &&
//     startDate !== ""
//   ) {
//     setFormValid(true);
//   }
//   setFormValid(false);
// };

// const firstName = (state) =>
//   useSelector(state.createEmployee.firstName.value);
// const lastName = (state) => useSelector(state.createEmployee.lastName.value);
// const birth = (state) => useSelector(state.createEmployee.birth.value);
// const street = (state) => useSelector(state.createEmployee.street.value);
// const city = (state) => useSelector(state.createEmployee.city.value);
// const state = (state) => useSelector(state.createEmployee.state.value);
// const zipCode = (state) => useSelector(state.createEmployee.zipCode.value);
// const startDate = (state) =>
//   useSelector(state.createEmployee.startDate.value);
// const department = (state) =>
//   useSelector(state.createEmployee.department.value);

// const firstNameValid = (state) =>
//   useSelector(state.createEmployee.firstName.valid);
// const lastNameValid = (state) =>
//   useSelector(state.createEmployee.lastName.valid);
// const birthValid = (state) => useSelector(state.createEmployee.birth.valid);
// const streetValid = (state) => useSelector(state.createEmployee.street.valid);
// const cityValid = (state) => useSelector(state.createEmployee.city.valid);
// const stateValid = (state) => useSelector(state.createEmployee.state.valid);
// const zipCodeValid = (state) =>
//   useSelector(state.createEmployee.zipCode.valid);
// const startDateValid = (state) =>
//   useSelector(state.createEmployee.startDate.valid);
// const departmentValid = (state) =>
//   useSelector(state.createEmployee.department.valid);

// const modal = (state) => state.createEmployee.modal.display;

//validInputText(inputFirstName);
//console.log(validInputText(inputFirstName));
//console.log(inputState.current);
//console.log(inputFirstName);
//console.log(inputFirstName.current.value);
//const Id = employees.length + 100;

// export default function CreateEmployee() {
//   const dispatch = useDispatch();

//   const employees = useSelector((state) => state.employeeList.data);

//   const inputFirstName = useRef();
//   const inputLastName = useRef();
//   const inputBirth = useRef();
//   const inputStreet = useRef();
//   const inputCity = useRef();
//   const inputState = useRef();
//   const inputZipCode = useRef();
//   const inputStartDate = useRef();
//   const inputDepartment = useRef();

//   //console.log(inputFirstName);
//   //console.log(inputFirstName.current.value);

//   //const firstName = useSelector(select.firstName);
//   const lastName = useSelector(select.lastName);
//   const birth = useSelector(select.birth);
//   const street = useSelector(select.street);
//   const city = useSelector(select.city);
//   const state = useSelector(select.state);
//   const zipCode = useSelector(select.zipCode);
//   const startDate = useSelector(select.startDate);
//   const department = useSelector(select.department);

//   const firstNameValid = useSelector(select.firstNameValid);
//   const lastNameValid = useSelector(select.lastNameValid);
//   const birthValid = useSelector(select.birthValid);
//   const streetValid = useSelector(select.streetValid);
//   const cityValid = useSelector(select.cityValid);
//   const stateValid = useSelector(select.stateValid);
//   const zipCodeValid = useSelector(select.zipCodeValid);
//   const startDateValid = useSelector(select.startDateValid);
//   const departmentValid = useSelector(select.departmentValid);

//   const Id = employees.length + 100;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       firstNameValid === true &&
//       lastNameValid === true &&
//       birthValid === true &&
//       streetValid === true &&
//       cityValid === true &&
//       stateValid === true &&
//       zipCodeValid === true &&
//       startDateValid === true &&
//       departmentValid === true &&
//       department !== "" &&
//       state !== "" &&
//       birth !== "" &&
//       startDate !== ""
//     ) {
//       dispatch(
//         addEmployee({
//           Id,
//           //firstName,
//           lastName,
//           birth,
//           street,
//           city,
//           state,
//           zipCode,
//           startDate,
//           department,
//         })
//       );

//       const employeeSheet = {
//         id: employees.length + 100,
//         firstName: inputFirstName.current.value,
//         // lastName: inputFirstName.current.value,
//         // birth: inputFirstName.current.value,
//         // startDate: inputFirstName.current.value,
//         // street: inputFirstName.current.value,
//         // city: inputFirstName.current.value,
//         // state: inputFirstName.current.value,
//         // zipCode: inputFirstName.current.value,
//         // department: inputFirstName.current.value,
//       };
//       console.log(employeeSheet);
//       dispatch(reset);
//       dispatch(openModal(true));
//       return console.log("form valid");
//     }
//     console.log("form error");
//   };
