import { useDispatch, useSelector } from "react-redux"
import { goPreviousPage, goNextPage } from "../../feature/employeesTableSlice"

/**
* Paged of table
* @component
*/
export default function PagedOfTable () {
    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.employeeList.currentPage) 
    const employeesPerPage = useSelector((state) => state.employeeList.employeesPerPage) 
    const totalEmployees = useSelector((state) => state.employeeList.data.length)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++ ) {
        pageNumbers.push(i)
    }
    return (
        <section className="table-layout-ctn">
            <p className="entries-number"> Showing <b>{currentPage}</b> to <b>{pageNumbers.length}</b> of <b>{totalEmployees}</b> entries</p>
            <div className="pagination">
                <span className={currentPage === 1 ? "inactive" : "pointer"} onClick={()=>dispatch(goPreviousPage())}>Previous</span> <b>{currentPage}</b> <span className={currentPage === pageNumbers.length ? "inactive" : "pointer"} onClick={()=>dispatch(goNextPage(pageNumbers.length))}>Next</span>
            </div>
        </section>
    )
}

