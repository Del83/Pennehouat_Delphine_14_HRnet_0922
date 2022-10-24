import "../../styles/create.css"

/**
* Modal component
* @component
*/
export default function Modal ({display, setDisplay, message}) {

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