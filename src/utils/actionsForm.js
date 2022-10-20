const formManagement = {
  selectItem: (state, action) => {
    const item = action.payload.textContent;
    const title = action.payload.title;
    if (title === "department") {
      state.department.select = item;
      state.department.value = item;
      state.department.valid = true;
      return state;
    }
    if (title === "state") {
      state.state.select = item;
      state.state.value = item;
      state.state.valid = true;
      return state;
    }
    return console.log("message error select");
  },
  handleInput: (state, action) => {
    const inputValue = action.payload.value;
    const inputName = action.payload.name;
    const category = action.payload.category.name;

    console.log(category);

    if (inputName === "firstName") {
      if (inputValue.match(/^[A-zÀ-ú-,\s]*$/)) {
        state.firstName.value = inputValue;
        state.firstName.valid = true;
        return state;
      } else {
        state.firstName.valid = false;
        return state;
      }
    }
    if (inputName === "lastName") {
      if (inputValue.match(/^[A-zÀ-ú-,\s]*$/)) {
        state.lastName.value = inputValue.toUpperCase();
        state.lastName.valid = true;
        return state;
      } else {
        state.lastName.valid = false;
        return state;
      }
    }
    if (inputName === "street") {
      if (inputValue.match(/^[A-zÀ-ú-0-9-,\s]*$/)) {
        state.street.value = inputValue;
        state.street.valid = true;
        return state;
      } else {
        state.street.valid = false;
        return state;
      }
    }
    if (inputName === "city") {
      if (inputValue.match(/^[A-zÀ-ú-,\s]*$/)) {
        state.city.value = inputValue;
        state.city.valid = true;
        return state;
      } else {
        state.city.valid = false;
      }
      return state;
    }
    if (inputName === "zipCode") {
      if (!inputValue.match(/^(\d{6})?$/)) {
        state.zipCode.value = inputValue;
        state.zipCode.valid = true;
        return state;
      } else {
        state.zipCode.valid = false;
      }
      return state;
    }
    if (inputName === "show") {
      state.firstName.value = inputValue;
      state.firstName.valid = true;
      return state;
    }
  },
  handleDate: (state, action) => {
    const inputValue = action.payload.value;
    const inputName = action.payload.name;
    if (inputName === "birth") {
      state.birth.value = inputValue;
      state.birth.valid = true;
      return state;
    }
    if (inputName === "startDate") {
      state.startDate.value = inputValue;
      state.startDate.valid = true;
      return state;
    }
  },
  validForm: (state, action) => {
    if (
      state.firstName.valid === true &&
      state.lastName.valid === true &&
      state.birth.valid === true &&
      state.street.valid === true &&
      state.city.valid === true &&
      state.state.valid === true &&
      state.zipCode.valid === true &&
      state.startDate.valid === true &&
      state.department.valid === true
    ) {
      console.log("hello");
    }
  },
  openModal: (state, action) => {
    state.modal.display = action.payload;
  },
  reset: (state, action) => {
    state.firstName.value = "";
    state.lastName.value = "";
    state.birth.value = "";
    state.street.value = "";
    state.city.value = "";
    state.state.value = "";
    state.startDate.value = "";
    state.department.value = "";
    return state;
  },
};

export default formManagement;
