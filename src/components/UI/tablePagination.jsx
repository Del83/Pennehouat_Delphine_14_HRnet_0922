
export default function Pagination ({ employeePerPage, totalEmployees, currentPage, setCurrentPage }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalEmployees / employeePerPage); i++ ) {
        pageNumbers.push(i)
    }

    const previous = () => {
        setCurrentPage(currentPage-1)
    } 

    const next = () => {
        setCurrentPage(currentPage+1)
    } 


    return (
        <section className="table-layout-ctn">
            <p className="entries-number">
                Showing <b>{currentPage}</b> to <b>{pageNumbers.length}</b> of <b>{totalEmployees}</b> entries
            </p>
            <div className="pagination">
                <span className={currentPage === 1 ? "inactive" : ""} onClick={()=>previous()}>Previous</span> <b>{currentPage}</b> <span className={currentPage === pageNumbers.length ? "inactive" : ""} onClick={()=>next()}>Next</span>
            </div>
        </section>
       
    )
}

