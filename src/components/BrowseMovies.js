import classes from "./BrowseMovies.module.css";
import React, { useEffect, useState, useRef } from "react";
import MoviePosterList from "./MoviePosterList";
import { fetchSearchMovies } from "../data";
import Pagination from "./Pagination";
import { useHistory, useLocation } from "react-router-dom";

const BrowseMovies = () => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const searchQuery = queryParams.get("search_query") || ""; // if queryParams return null we set it to empty string then
  const currentPage = parseInt(queryParams.get("page")) || 1; // if queryParams return null default is page 1

  const [totalPage, setTotalPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      const moviesData = await fetchSearchMovies(searchQuery, currentPage);
      setMovies(moviesData.results);
      setTotalPage(moviesData.total_pages);
    };
    fetchApi();
  }, [searchQuery, currentPage]);

  const searchMovieHandler = () => {
    const keywords = inputRef.current.value;
    if (keywords.trim() !== "") {
      history.push(`/movies?search_query=${keywords}&page=1`);
    } else {
      history.push("/movies?page=1");
    }
  };

  const setPageHandler = (newPage) => {
    if (searchQuery.trim() !== "") {
      history.push(`/movies?search_query=${searchQuery}&page=${newPage}`);
    } else {
      history.push(`/movies?page=${newPage}`);
    }
  };

  return (
    <div>
      BrowseMovies
      <input ref={inputRef}></input>
      <button onClick={searchMovieHandler}>Search</button>
      {movies.length > 0 && <MoviePosterList movies={movies} />}
      {movies.length === 0 && <p>No movies found!</p>}
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setPage={setPageHandler}
      />
    </div>
  );
};

export default BrowseMovies;
