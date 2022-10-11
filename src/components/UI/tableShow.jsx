export default function ShowEntries ({ employeePerPage, setEmployeePerPage }) {

    const numberEntries = [10, 15, 20] 

    const selectNumberEntries = (e) => {
        return setEmployeePerPage(e.target.value)
    }

    const entries = () => {
        return (
            <select onChange={(e) => selectNumberEntries(e)}>
                {numberEntries.map((number, index) => (
                    <option key={index} value={number} defaultValue={employeePerPage} >
                        {number}
                    </option>
                ))}
            </select>
        )
    }

    return (
         <div className="show-entries">
            <span>Show</span> <b>{entries()}</b> <span>entries</span>
        </div>
    )
}