import propTypes from 'prop-types';
import "../../styles/create.css"

/**
* Modal component
* @param {bool} display modal display
* @param {func} setDisplay modal state change
* @param {string} message modal message
* @component
*/
export default function Modal ({ display, setDisplay, message }) {

  const handleDisplay = () => {setDisplay(!display)};

    return (
        <section className={ display ? "modal" : "display"}>
            <div className="modal-ctn">
              <button className="modal-close" onClick={handleDisplay}>X</button>
              <p>{message}</p>
            </div>
        </section>
    )
}

Modal.propTypes = {
  display: propTypes.bool, 
  setDisplay: propTypes.func,
  message: propTypes.string,
}