import {  useSelector, useDispatch } from "react-redux";
import "../../styles/create.css"
import { openModal } from "../../utils/postEmployees";

import { modal } from "../../utils/selector";

/**
* Header layout
* @component
*/
export default function Modal () {
  const dispatch = useDispatch();
  const display = useSelector(modal);
  const handleDisplay = () => dispatch(openModal(false))
  
    return (
        <section className={ display ? "modal" : "display"}>
            <div className="modal-ctn">
              <button className="modal-close" onClick={handleDisplay}>X</button>
              <p>Employee Created !</p>
            </div>
        </section>
    )
}