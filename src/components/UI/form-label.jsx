import "../../styles/create.css"

/**
* Header layout
* @component
*/
export default function FormLabel ( {labelFor, labelContent}) {

    return (
        <label htmlFor={labelFor} className="form-label">{labelContent}</label>       
    )
}