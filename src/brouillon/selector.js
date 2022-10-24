export const firstName = (state) => state.createEmployee.firstName.value;
export const lastName = (state) => state.createEmployee.lastName.value;
export const birth = (state) => state.createEmployee.birth.value;
export const street = (state) => state.createEmployee.street.value;
export const city = (state) => state.createEmployee.city.value;
export const state = (state) => state.createEmployee.state.value;
export const zipCode = (state) => state.createEmployee.zipCode.value;
export const startDate = (state) => state.createEmployee.startDate.value;
export const department = (state) => state.createEmployee.department.value;

export const firstNameValid = (state) => state.createEmployee.firstName.valid;
export const lastNameValid = (state) => state.createEmployee.lastName.valid;
export const birthValid = (state) => state.createEmployee.birth.valid;
export const streetValid = (state) => state.createEmployee.street.valid;
export const cityValid = (state) => state.createEmployee.city.valid;
export const stateValid = (state) => state.createEmployee.state.valid;
export const zipCodeValid = (state) => state.createEmployee.zipCode.valid;
export const startDateValid = (state) => state.createEmployee.startDate.valid;
export const departmentValid = (state) => state.createEmployee.department.valid;

export const modal = (state) => state.createEmployee.modal.display;
