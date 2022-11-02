import propTypes from "prop-types";

/**
 * Table paging
 * @param {number} currentPage the current page
 * @param {array} pageNumbers the page numbers
 * @param {func} itemsTotal the total of the items
 * @param {func} goPreviousPage function to go to the previous page
 * @param {func} goNextPage function to go to the next page
 * @component
 */
export default function Paging({
  currentPage,
  pageNumbers,
  itemsTotal,
  goPreviousPage,
  goNextPage,
}) {
  return (
    <section className="table-layout-ctn">
      <p className="entries-number">
        {" "}
        Showing <b>{currentPage}</b> to <b>{pageNumbers.length}</b> of{" "}
        <b>{itemsTotal()}</b> entries
      </p>
      <div className="pagination">
        <span
          className={currentPage === 1 ? "inactive" : "pointer"}
          onClick={goPreviousPage}
        >
          Previous
        </span>{" "}
        <b>{currentPage}</b>{" "}
        <span
          className={
            currentPage === pageNumbers.length ? "inactive" : "pointer"
          }
          onClick={goNextPage}
        >
          Next
        </span>
      </div>
    </section>
  );
}

Paging.propTypes = {
  currentPage: propTypes.number,
  pageNumbers: propTypes.array,
  itemsTotal: propTypes.func,
  goPreviousPage: propTypes.func,
  goNextPage: propTypes.func,
};
