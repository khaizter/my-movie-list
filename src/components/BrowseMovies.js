import classes from "./BrowseMovies.module.css";
import React, { useEffect, useState, useRef } from "react";
import MoviePosterList from "./MoviePosterList";
import { fetchSearchMovies } from "../data";

const BrowseMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const fetchApi = async () => {
      const moviesData = await fetchSearchMovies(searchQuery);
      setMovies(moviesData.results);
    };
    fetchApi();
  }, [searchQuery]);

  const searchMovieHandler = () => {
    console.log(inputRef.current.value);
    setSearchQuery(inputRef.current.value);
  };

  return (
    <div>
      BrowseMovies
      <input ref={inputRef}></input>
      <button onClick={searchMovieHandler}>Search</button>
      {movies.length > 0 && <MoviePosterList movies={movies} />}
      {movies.length == 0 && <p>No movies found!</p>}
    </div>
  );
};

export default BrowseMovies;
