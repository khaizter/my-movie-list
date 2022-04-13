import classes from "./BrowseMovies.module.css";
import React, { useEffect, useState, useRef } from "react";
import MoviePosterList from "./MoviePosterList";
import { fetchSearchMovies } from "../data";
import Pagination from "./Pagination";

const BrowseMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      const moviesData = await fetchSearchMovies(searchQuery, currentPage);
      setMovies(moviesData.results);
      setTotalPage(moviesData.total_pages);
      console.log(moviesData.total_pages);
    };
    fetchApi();
  }, [searchQuery, currentPage]);

  const searchMovieHandler = () => {
    console.log(inputRef.current.value);
    setSearchQuery(inputRef.current.value);
    setCurrentPage(1);
  };

  return (
    <div>
      BrowseMovies
      <input ref={inputRef}></input>
      <button onClick={searchMovieHandler}>Search</button>
      {movies.length > 0 && <MoviePosterList movies={movies} />}
      {movies.length == 0 && <p>No movies found!</p>}
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  );
};

export default BrowseMovies;
