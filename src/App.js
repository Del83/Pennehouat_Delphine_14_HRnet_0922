import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import CreateEmployee from "./pages/createEmployee";
import EmployeesList from "./pages/employeeList";
import "../src/styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/home" element={<CreateEmployee />} />
            <Route path="/employees" element={<EmployeesList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
