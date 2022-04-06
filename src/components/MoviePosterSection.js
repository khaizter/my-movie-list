import classes from "./MoviePosterSection.module.css";
import React, { useEffect, useState } from "react";
import MoviePosterList from "./MoviePosterList";
import MoviePagination from "./MoviePagination";
import { fetchDiscover } from "../data/index";

const MoviePosterSection = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchDiscover(currentPage);
      setMovies(data.results);
    };
    fetchApi();
  }, [currentPage]);

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);

  const prevPage = () =>
    setCurrentPage((currentValue) => {
      if (currentValue === 1) return currentValue;
      return currentValue - 1;
    });

  return (
    <div className={classes.section}>
      <h1>My Movie List</h1>
      <MoviePosterList movies={movies} />
      <MoviePagination nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
};

export default MoviePosterSection;
