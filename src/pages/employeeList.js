import React from "react";

import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Table from "../components/UI/table";
import Footer from "../components/layout/footer";

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
