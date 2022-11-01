import { NavLink, useLocation } from "react-router-dom";
import iconCreateBlack from "../../assets/icon_create_white.png";
import iconCreateGrey from "../../assets/icon_create_grey.png";
import iconViewBlack from "../../assets/icon_view_white.png";
import iconViewGrey from "../../assets/icon_view_grey.png";
import "../../styles/layout.css";

/**
 * Side layout
 * @component
 */
export default function Side() {
  const currentUrl = useLocation();

  const createSide = () => {
    return (
      <div className="side-ctn">
        <NavLink className="side-section active" to="/employees">
          <img
            className="side-icon"
            src={iconCreateBlack}
            alt="logo-create"
            width="30"
            height="30"
          />
          <h3>Create employee</h3>
        </NavLink>
        <NavLink className="side-section" to="/employees">
          <img
            className="side-icon"
            src={iconViewGrey}
            alt="logo-create"
            width="30"
            height="30"
          />
          <h3>See employees</h3>
        </NavLink>
      </div>
    );
  };

  const viewSide = () => {
    return (
      <div className="side-ctn">
        <NavLink className="side-section" to="/home">
          <img
            className="side-icon"
            src={iconCreateGrey}
            alt="logo-create"
            width="30"
            height="30"
          />
          <h3>Create employee</h3>
        </NavLink>
        <NavLink className="side-section active" to="/home">
          <img
            className="side-icon"
            src={iconViewBlack}
            alt="logo-create"
            width="30"
            height="30"
          />
          <h3>See employees</h3>
        </NavLink>
      </div>
    );
  };

  return (
    <section className="side">
      {currentUrl.pathname.includes("/employees") ? viewSide() : createSide()}
    </section>
  );
}
