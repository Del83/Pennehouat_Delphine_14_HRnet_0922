import "../../styles/create.css"

/**
* Form input
* @component
*/
export default function FormInput ( { labelFor, valueInput, setValue, className }) {

    return (
              <input
                value={valueInput}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                id={labelFor}
                className={className}
                //className="form-control"
                //fieldError="false"
              />
    )
}