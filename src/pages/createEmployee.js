import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Dropdown from "../components/UI/form-dropdown";
import FormInput from "../components/UI/form-input";
import FormLabel from "../components/UI/form-label";

import { statesList } from "../data/statesList";
import { departmentList } from "../data/departments";

import "../styles/create.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Footer from "../components/layout/footer";

export default function CreateEmployee() {
  //const { register, handleSubmit } = useForm();
  //const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  // const statesNameList = statesList.map((state) => (
  //     <li key={`${state.index}-${state.name}`}>{state.name}</li>
  //   ));

  const statesNameList = statesList.map((state) => [
    { value: state.name, label: state.name },
  ]);

  const MyComponent = () => <Select options={statesNameList} />;

  // const statesNameList = statesList.map((state) => (
  //   <li key={`${state.index}-${state.name}`}>{state.name}</li>
  // ));

  // const statesNameList = statesList.map((state) => (
  //   <option key={`${state.index}-${state.name}`}>{state.name}</option>
  // ));

  const departmentsNameList = departmentList.map((department) => (
    <li key={`${department.index}-${department}`}>{department}</li>
  ));

  function Appp() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="Yes"
        />
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="No"
        />

        <input type="submit" />
      </form>
    );
  }

  return (
    <div className="create-employee">
      <Header />
      <Side />
      <div className="form-background">
        <form className="form-ctn" onSubmit={handleSubmit(onSubmit)}>
          <section className="identity">
            <h3>Identity of the employee</h3>
            <div className="form-identity">
              <label className="form-label">
                First Name
                <input
                  type="text"
                  placeholder="your first name..."
                  {...register("firstName", { required: true, maxLength: 80 })}
                  className="form-control"
                />
              </label>
              <label className="form-label">
                Last Name
                <input {...register("lastName")} className="form-control" />
              </label>
              <label className="form-label">
                Date of Birth
                <input {...register("dateOfBirth")} className="form-control" />
              </label>
            </div>
          </section>

          <section className="address">
            <h3>Address of the employee</h3>
            <div className="form-address">
              <label className="form-label">
                Street
                <input {...register("street")} className="form-control" />
              </label>
              <label className="form-label">
                City
                <input {...register("city")} className="form-control" />
              </label>
              <label>
                State
                {MyComponent}
              </label>

              {/* <label className="form-label">
                State
                <select {...register("category")} className="form-control">
                  {statesNameList}
                </select>
              </label> */}

              {/* <Dropdown
                contents={statesNameList}
                labelFor="state"
                //selectState={selectState}
              /> */}
              <label className="form-label">
                ZipCode
                <input {...register("zipCode")} className="form-control" />
              </label>
            </div>
          </section>

          <section className="information">
            <h3>Employee information</h3>
            <div className="form-information">
              <div className="form-profile-start-date">
                <FormLabel labelFor="startDate" labelContent="Start Date" />
                <FormInput labelFor="startDate" className="form-control" />
              </div>
              <div className="form-department">
                <FormLabel labelFor="department" labelContent="Department" />
                <Dropdown
                  contents={departmentsNameList}
                  labelFor="department"
                  //select={selectDepartment}
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
    </div>
  );
}

// const { inputFirstNameState, setInputFirstNameState } = useState("");
// const { valueFirstNameState, setValueFirstNameState } = useState("");

// const { lastNameState, setLastNameState } = useState("");
// const { birthState, setBirthState } = useState("");
// const { streetState, setStreetState } = useState("");
// const { cityState, setCityState } = useState("");
// const { selectState, setSelectState } = useState(statesList[0].name);
// const { zipCodeState, setZipCodeState } = useState("");
// const { startState, setStartState } = useState("");
// const { selectDepartment, setSelectDepartment } = useState(
//   departmentList[0].name
// );
// const handleSelectState = useCallback(
//   (e) => {
//     setSelectState(e.target.textContent);
//   },
//   [e]
// );

// useEffect(() => {
//   setValueFirstNameState(inputFirstNameState);
//   //console.log(valueFirstNameState);
// }, [setValueFirstNameState, inputFirstNameState]);

// console.log(valueFirstNameState);

//   const clickBackdrop = useCallback((e) => {
//     if (ref && !ref.current.contains(e.target)) closeDropdown()
// }, [])

//   const clickBackdrop = useCallback((e) => {
//     if (ref && !ref.current.contains(e.target)) closeDropdown()
// }, [])

/* <div>
                <FormLabel labelFor="firstName" labelContent="First Name" />
                <FormInput labelFor="firstName" className="form-control" />
              </div>
              <div>
                <FormLabel labelFor="lastName" labelContent="Last Name" />
                <FormInput labelFor="lastName" className="form-control" />
              </div>
              <div>
                <FormLabel
                  labelFor="dateOfBirth"
                  labelContent="Date of Birth"
                />
                <FormInput labelFor="dateOfBirth" className="form-control" />
              </div> */

/* <div>
<FormLabel labelFor="street" labelContent="Street" />
<FormInput labelFor="street" className="form-control" />
</div>
<div>
<FormLabel labelFor="city" labelContent="City" />
<FormInput labelFor="city" className="form-control" />
</div>

<div className="form-address-state">
<FormLabel
  labelFor="state"
  labelContent="State"
  className="form-control"
/>
</div> 
 <div>
                <FormLabel labelFor="zipCode" labelContent="Zip Code" />
                <FormInput labelFor="zipCode" className="form-control" />
              </div>
*/
