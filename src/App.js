/** IMPORT REACT REDUX */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** PAGES */
import CreateEmployee from "./pages/createEmployee";
import EmployeesList from "./pages/employeeList";

/** STYLE */
import "../src/styles/index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/home" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
