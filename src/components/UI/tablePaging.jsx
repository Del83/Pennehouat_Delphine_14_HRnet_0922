import propTypes from 'prop-types';

/**
* Table paging
* @param {number} currentPage the current page
* @param {func} setCurrentPage number of items to display per page
* @param {number} itemsPerPage items per page 
* @param {number} itemsTotal the total of the items
* @component
*/
export default function Paging ( {currentPage, setCurrentPage, itemsPerPage, itemsTotal} ) {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(itemsTotal / itemsPerPage); i++ ) {
        pageNumbers.push(i)
    }

    const goPreviousPage = () => {
        if (currentPage !== 1) {
          setCurrentPage(currentPage -1) ;
        }
        return currentPage;
      }

     const goNextPage = () => {
        if (currentPage !== pageNumbers.length) {
            setCurrentPage(currentPage+1)
        }
        return currentPage;
      }
    
    return (
        <section className="table-layout-ctn">
            <p className="entries-number"> Showing <b>{currentPage}</b> to <b>{pageNumbers.length}</b> of <b>{itemsTotal}</b> entries</p>
            <div className="pagination">
                <span className={currentPage === 1 ? "inactive" : "pointer"} onClick={goPreviousPage}>Previous</span> <b>{currentPage}</b> <span className={currentPage === pageNumbers.length ? "inactive" : "pointer"} onClick={goNextPage}>Next</span>
            </div>
        </section>
    )
}

Paging.propTypes = {
    currentPage: propTypes.number,
    setCurrentPage: propTypes.func,
    itemsPerPage: propTypes.number,
    itemsTotal: propTypes.number,
  }

