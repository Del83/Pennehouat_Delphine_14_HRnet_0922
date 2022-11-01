import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import logoCreate from "../../assets/icon_create_black.png";
import logoView from "../../assets/icon_view_black.png";
import "../../styles/layout.css";

/**
 * Header layout
 * @component
 */
export default function Header() {
  const currentUrl = useLocation();
  const createHeader = () => {
    return (
      <div className="header-ctn">
        <h2>CREATE A NEW EMPLOYEE</h2>
        <img
          className="logo-create"
          src={logoCreate}
          alt="logo-create"
          width="40"
          height="40"
        />
      </div>
    );
  };
  const viewHeader = () => {
    return (
      <div className="header-ctn">
        <h2>VIEW CURRENT EMPLOYEES</h2>
        <img
          className="logo-create"
          src={logoView}
          alt="logo-view"
          width="40"
          height="40"
        />
      </div>
    );
  };
  return (
    <section className="header">
      <section className="logo-ctn">
        <img className="logo" src={logo} alt="logo" width="130" height="130" />
        <div>
          <h1>Health Wealth </h1>
          <h1>HRnet</h1>
        </div>
      </section>
      {currentUrl.pathname.includes("/home") ? createHeader() : viewHeader()}
    </section>
  );
}
