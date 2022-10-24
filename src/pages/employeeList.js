/** IMPORT REACT REDUX */
import React from "react";

/** IMPORT COMPONENTS */
import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Table from "../components/UI/table";
import Footer from "../components/layout/footer";

/** STYLE */
import "../styles/table.css";

export default function EmployeesList() {
  return (
    <div>
      <Header />
      <Side />
      <Table />
      <Footer />
    </div>
  );
}
