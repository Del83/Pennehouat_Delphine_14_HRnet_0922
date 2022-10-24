import { useDispatch, useSelector } from "react-redux"
import { searchData } from "../../feature/employeesTableSlice"

/**
* Search in table
* @component
*/
export default function SearchInTable () {
    const dispatch = useDispatch()
    const searchInput = useSelector((state) => state.employeeList.searchInput) 
    const handleSearchInput = (e) => {

            const inputContent = e.target.value.toLowerCase()
                .replace(/\s/g, "")
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "");
            return dispatch(searchData(inputContent))
    }

    return (
        <div className="search">
            <span>Search</span>
            <input className="search-input" name="search" type="text" placeholder={" ..."} onChange={handleSearchInput} value={searchInput} />
        </div>
    )
}
