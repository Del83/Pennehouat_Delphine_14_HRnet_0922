import { useDispatch, useSelector } from "react-redux"
import { searchData } from "../../utils/getEmployees"

export default function TableSearched () {
    
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
            <input className="search-input" type="text" placeholder={" ..."} onChange= {handleSearchInput} value={searchInput} />
        </div>
    )
}





// export default function TableSearched ({ searchInput, setSearchInput }) {
 
//     const handleSearchInput = (e) => {
//         const inputContent = e.target.value.toLowerCase()
//         .replace(/\s/g, "")
//         .normalize("NFD")
//         .replace(/\p{Diacritic}/gu, "");
//         setSearchInput(inputContent)
//     }
//         return (
//             <div className="search">
//                 <span>Search</span>
//                 <input className="search-input" type="text" placeholder={" ..."} onChange={handleSearchInput} value={searchInput} />
//             </div>
//         )
//     }