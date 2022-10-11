import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
import logoCreate from "../../assets/icon_create_black.png"
import logoView from "../../assets/icon_view_black.png"
import "../../styles/layout.css"

/**
* Header layout
* @component
*/
export default function Header () {
    const currentUrl = useLocation();
    const createHeader = () => {
        return (
            <div className="header-ctn"> 
                <h1>CREATE A NEW EMPLOYEE</h1>
                <img className="logo-create" src={logoCreate} alt="logo-create" />
            </div>    
        )  
    }
    const viewHeader = () => {
        return (
            <div className="header-ctn"> 
                <h1>VIEW CURRENT EMPLOYEES</h1>
                <img className="logo-create" src={logoView} alt="logo-view" />
            </div>    
        )
    }
    return (
        <section className="header">
            <section className="logo-ctn"><img className="logo" src={logo} alt="logo"/></section>
            {currentUrl.pathname.includes("/home") ? createHeader() : viewHeader()}
        </section>
    )
}
