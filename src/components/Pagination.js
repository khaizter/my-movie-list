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

  const pageToDisplay = pages.slice(
    Math.max(firstPageIndex, currentPageIndex - 2),
    Math.min(lastPageIndex + 1, currentPageIndex + 3)
  );

  const pageHandler = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <div className={classes.container}>
      {currentPage > firstPage && (
        <button onClick={pageHandler.bind(null, currentPage - 1)}>Prev</button>
      )}

      {currentPage > 3 && (
        <button onClick={pageHandler.bind(null, currentPage - 3)}>...</button>
      )}

      {pageToDisplay.map((page) => {
        if (page === currentPage) {
          return (
            <button
              key={page}
              className={classes.active}
              onClick={pageHandler.bind(null, page)}
            >
              {page}
            </button>
          );
        } else {
          return (
            <button key={page} onClick={pageHandler.bind(null, page)}>
              {page}
            </button>
          );
        }
      })}

      {currentPage < lastPage - 2 && (
        <button onClick={pageHandler.bind(null, currentPage + 3)}>...</button>
      )}

      {currentPage < lastPage && (
        <button onClick={pageHandler.bind(null, currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
