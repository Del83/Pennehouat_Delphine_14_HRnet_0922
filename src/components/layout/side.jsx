import { NavLink, useLocation } from "react-router-dom";
import iconCreateBlack from "../../assets/icon_create_black.png"
import iconCreateGrey from "../../assets/icon_create_grey.png"
import iconViewBlack from "../../assets/icon_view_black.png"
import iconViewGrey from "../../assets/icon_view_grey.png"
import "../../styles/layout.css"

/**
* Side layout
* @component
*/
export default function Side () {
    const currentUrl = useLocation();

    const createSide = () => {
        return (
            <div className="side-ctn" > 
                <NavLink className="side-section active" to="/employees">
                    <img className="side-icon" src={iconCreateBlack} alt="logo-create" />
                    <h2>Create employee</h2>
                </NavLink>
                <NavLink className="side-section" to="/employees">
                    <img className="side-icon" src={iconViewGrey} alt="logo-create" />
                    <h2>See employees</h2> 
                </NavLink>
            </div>    
        )  
    }

    const viewSide = () => {
        return (
            <div className="side-ctn"> 
                <NavLink className="side-section" to="/home">
                    <img className="side-icon" src={iconCreateGrey} alt="logo-create" />
                    <h2>Create employee</h2>
                </NavLink>
                <NavLink className="side-section active" to="/home">
                    <img className="side-icon" src={iconViewBlack} alt="logo-create" /> 
                    <h2>See employees</h2> 
                </NavLink>
            </div>    
        )
    }

    return (
        <section className="side">
            {currentUrl.pathname.includes("/home") ? createSide() : viewSide()}
        </section>
    )
}