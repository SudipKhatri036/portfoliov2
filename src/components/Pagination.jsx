import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

function Pagination({
  currentPage,
  maxPage,
  handlePageNum,
  handleNxt,
  handlePrev,
}) {
  const pageLimit = 3;
  const halfLimit = Math.floor(pageLimit / 2);

  let start = Math.max(1, currentPage - halfLimit);
  let end = Math.min(maxPage, currentPage + halfLimit);

  if (end - start < pageLimit - 1) {
    if (start === 1) {
      end = Math.min(start + pageLimit - 1, maxPage);
    } else {
      start = Math.max(1, end - pageLimit + 1);
    }
  }

  return (
    <div className="pagination-item">
      <nav>
        <ul className="pagination">
          <li className={`page-item  ${currentPage === 1 ? "disabled" : ""}`}>
            <span className="page-link">
              <button
                className="page-link"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                <FaChevronLeft />
              </button>
            </span>
          </li>

          {Array.from({ length: end - start + 1 }).map((_, index) => {
            const pageNum = start + index;
            return (
              <li className="page-item" key={pageNum}>
                <span className="page-link">
                  <button
                    className={`page-link ${
                      currentPage === pageNum ? "active" : ""
                    }`}
                    onClick={() => handlePageNum(pageNum)}
                  >
                    {pageNum}
                  </button>
                </span>
              </li>
            );
          })}

          <li
            className={`page-item ${currentPage === maxPage ? "disabled" : ""}`}
          >
            <span className="page-link">
              <button className="page-link" onClick={handleNxt}>
                <FaChevronRight />
              </button>
            </span>
          </li>
        </ul>
      </nav>
      <div className="page-indx">
        Page <span>{currentPage}</span> of {maxPage}
      </div>
    </div>
  );
}

export default Pagination;
