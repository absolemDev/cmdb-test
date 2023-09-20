import React from "react";
import PropTypes from "prop-types";

const PaginationComponent = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item${page === currentPage ? " active" : ""}`}
            onClick={() => onPageChange(page)}
            role="button"
          >
            <span className="page-link">{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

PaginationComponent.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationComponent;
