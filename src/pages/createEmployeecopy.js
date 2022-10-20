import Header from "../components/layout/header";
import Side from "../components/layout/side";
import Form from "../components/UI/form/form";
import Footer from "../components/layout/footer";
import Modal from "../components/UI/modal";

import "../styles/create.css";

export default function CreateEmployee() {
  return (
    <div className="create-employee">
      <Header />
      <Side />
      <Form />
      <Footer />
      <Modal />
    </div>
  );
}
