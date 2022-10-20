import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../../../utils/getEmployees"
import { reset, openModal } from "../../../utils/postEmployees";
import * as select from "../../../utils/selector";
import FormInput from "./form-input";
import Dropdown from "./form-dropdown";
import FormDate from "./form-date";
import { STATES_LIST } from "../../../data/states";
import { DEPARTMENTS_LIST } from "../../../data/departments";

import "../../../styles/create.css";
//import Modal from "../modal";


export default function Form() {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.employeeList.data);
  
  const firstName = useSelector(select.firstName);
  const lastName = useSelector(select.lastName);
  const birth = useSelector(select.birth);
  const street = useSelector(select.street);
  const city = useSelector(select.city);
  const state = useSelector(select.state);
  const zipCode = useSelector(select.zipCode);
  const startDate = useSelector(select.startDate);
  const department = useSelector(select.department);

  const firstNameValid = useSelector(select.firstNameValid);
  const lastNameValid = useSelector(select.lastNameValid);
  const birthValid = useSelector(select.birthValid);
  const streetValid = useSelector(select.streetValid);
  const cityValid = useSelector(select.cityValid);
  const stateValid = useSelector(select.stateValid);
  const zipCodeValid = useSelector(select.zipCodeValid);
  const startDateValid = useSelector(select.startDateValid);
  const departmentValid = useSelector(select.departmentValid);

  const Id = employees.length + 100


  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstNameValid === true && lastNameValid === true && birthValid === true && streetValid === true && cityValid === true && stateValid === true && zipCodeValid === true && startDateValid === true && departmentValid === true && department !== "" && state !== "" && birth !== "" && startDate !== "")  {
    dispatch(addEmployee({Id, firstName,lastName, birth, street, city, state, zipCode, startDate, department})) 
    dispatch(reset)
    dispatch(openModal(true))
    return console.log({ lastName, firstName });
    } 
    console.log("form error");
  };

  return (
      <div className="form-background">
        <form className="form-ctn" onSubmit={handleSubmit}>
          <section className="identity">
            <h4>Identity of the employee</h4>
            <div className="form-identity">
              <FormInput
                label="First name"
                name="firstName"
                type="text"
                value={firstName}
                valid={firstNameValid}
              />
              <FormInput
                label="Last name"
                name="lastName"
                type="text"
                value={lastName}
                valid={lastNameValid}
              />
            <FormDate label="Date of birth" name="birth" max={new Date(2004, 11, 31)} defaultValue={new Date(2004, 11, 31)}/>
            </div>
          </section>
          <section className="address">
            <h4>Address of the employee</h4>
            <div className="form-address">
              <FormInput
                label="Street"
                name="street"
                type="text"
                value={street}
                valid={streetValid}
              />
              <FormInput
                label="City"
                name="city"
                type="text"
                value={city}
                valid={cityValid}
              />
              <Dropdown
                label="State"
                name="state"
                value={state}
                list={STATES_LIST}
                valid={stateValid}
              />
              <FormInput
                label="Zip Code"
                name="zipCode"
                type="number"
                value={zipCode}
                valid={zipCodeValid}
              />
            </div>
          </section>

          <section className="information">
            <h4>Employee information</h4>
            <div className="form-information">
              <div className="form-profile-start-date">
              <FormDate label="Start date" name="startDate" max={new Date()} defaultValue={new Date()}/>
              </div>
              <div className="form-department">
                <Dropdown
                  label="Department"
                  name="department"
                  value={department}
                  list={DEPARTMENTS_LIST}
                  valid={departmentValid}
                />
              </div>
            </div>
          </section>
          <div className="create-button-ctn">
            <button className="create-button">Create employee</button>
          </div>
        </form>
      </div>
  );
}
