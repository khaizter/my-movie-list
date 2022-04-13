import classes from "./MovieSections.module.css";
import React, { useState, useEffect } from "react";
import MovieSection from "./MovieSection";
import {
  fetchPopularMovies,
  fetchTopratedMovies,
  fetchUpcomingMovies,
} from "../data";

const MovieSections = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const popularMoviesData = await fetchPopularMovies();
      setPopularMovies(popularMoviesData.results.slice(0, 8));
      const topratedMoviesData = await fetchTopratedMovies();
      setTopratedMovies(topratedMoviesData.results.slice(0, 8));
      const upcomingMoviesData = await fetchUpcomingMovies();
      setUpcomingMovies(upcomingMoviesData.results.slice(0, 4));
    };
    fetchApi();
  }, []);

  return (
    <div className={classes.section}>
      <MovieSection movies={popularMovies} title={"Popular Movies"} />
      <MovieSection movies={topratedMovies} title={"Top Rated Movies"} />
      <MovieSection movies={upcomingMovies} title={"Upcoming Movies"} />
    </div>
  );
};

export default MovieSections;
