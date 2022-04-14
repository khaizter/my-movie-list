import classes from "./Pagination.module.css";
import React from "react";

const Pagination = ({ totalPage, currentPage, setPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  const firstPage = pages[0];
  const lastPage = pages.slice(-1)[0];
  const currentPageIndex = currentPage - 1;
  const firstPageIndex = 0;
  const lastPageIndex = pages.length - 1;

  // i slice the page navigation to display 5 options only every time whist is (currentPage - 2, currentPage +2)
  // i use Math libraries to catch out of bounds error like exceeding the page bounderies
  const pageToDisplay = pages.slice(
    Math.max(firstPageIndex, currentPageIndex - 2),
    Math.min(lastPageIndex + 1, currentPageIndex + 3)
  );

  return (
    <div className={classes.container}>
      {currentPage > firstPage && (
        <button onClick={setPage.bind(null, currentPage - 1)}>Prev</button>
      )}

      {currentPage > 3 && (
        <button onClick={setPage.bind(null, currentPage - 3)}>...</button>
      )}

      {pageToDisplay.map((page) => {
        if (page === currentPage) {
          return (
            <button
              key={page}
              className={classes.active}
              onClick={setPage.bind(null, page)}
            >
              {page}
            </button>
          );
        } else {
          return (
            <button key={page} onClick={setPage.bind(null, page)}>
              {page}
            </button>
          );
        }
      })}

      {currentPage < lastPage - 2 && (
        <button onClick={setPage.bind(null, currentPage + 3)}>...</button>
      )}

      {currentPage < lastPage && (
        <button onClick={setPage.bind(null, currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
