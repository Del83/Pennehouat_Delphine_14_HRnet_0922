import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateEmployee from "./pages/createEmployeecopy";
import EmployeesList from "./pages/employeeList";
import "../src/styles/App.css";

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
