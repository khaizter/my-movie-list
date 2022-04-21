import classes from "./BrowseMovies.module.css";
import React, { useEffect, useState, useRef } from "react";
import MoviePosterList from "./MoviePosterList";
import { fetchGenres, fetchSearchMovies, fetchGenreMovies } from "../data";
import Pagination from "./Pagination";
import { useHistory, useLocation } from "react-router-dom";

const BrowseMovies = () => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const searchQuery = queryParams.get("search_query")
    ? queryParams.get("search_query").replaceAll(" ", "+")
    : ""; // if queryParams return null we set it to empty string then
  const currentPage = parseInt(queryParams.get("page")) || 1; // if queryParams return null default is page 1
  const genreQuery = parseInt(queryParams.get("genre"));

  console.log(searchQuery);

  const [totalPage, setTotalPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      let moviesData;
      if (genreQuery) {
        moviesData = await fetchGenreMovies(genreQuery, currentPage);
      } else {
        moviesData = await fetchSearchMovies(searchQuery, currentPage);
      }
      const genresData = await fetchGenres();
      setMovies(moviesData.results);
      setTotalPage(moviesData.total_pages);
      setGenres(genresData.genres);
    };
    fetchApi();
  }, [searchQuery, currentPage, genreQuery]);

  const searchMovieHandler = () => {
    const keywords = inputRef.current.value;
    if (keywords.trim() !== "") {
      history.push(
        `/movies?search_query=${keywords.replaceAll(" ", "+")}&page=1`
      );
    } else {
      history.push("/movies?page=1");
    }
  };

  const setPageHandler = (newPage) => {
    if (searchQuery.trim() !== "") {
      history.push(`/movies?search_query=${searchQuery}&page=${newPage}`);
    } else if (genreQuery) {
      history.push(`/movies?genre=${genreQuery}&page=${newPage}`);
    } else {
      history.push(`/movies?page=${newPage}`);
    }
  };

  const genreHandler = (genreId) => {
    history.push(`/movies?genre=${genreId}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Browse Movies</h1>
      <div className={classes["filter-container"]}>
        <input
          ref={inputRef}
          onKeyDown={(e) => e.key === "Enter" && searchMovieHandler()}
        ></input>
        <button onClick={searchMovieHandler}>SEARCH</button>
      </div>
      <ul className={classes.genres}>
        {genres.map((genre) => (
          <li key={genre.id}>
            <button
              className={
                classes.genre +
                (genre.id === genreQuery ? " " + classes.active : "")
              }
              onClick={genreHandler.bind(null, genre.id)}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setPage={setPageHandler}
      />
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
