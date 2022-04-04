import classes from "./MoviePagination.module.css";
import React from "react";

const MoviePagination = ({ nextPage, prevPage }) => {
  return (
    <ul className={classes.pagination}>
      <li>
        <button onClick={prevPage}>{`<`}</button>
      </li>
      <li>
        <button onClick={nextPage}>{`>`}</button>
      </li>
    </ul>
  );
};

export default MoviePagination;
