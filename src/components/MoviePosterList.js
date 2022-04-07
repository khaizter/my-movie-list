import classes from "./MoviePosterList.module.css";
import React from "react";
import MoviePoster from "./MoviePoster";

const MoviePosterList = ({ movies }) => {
  return (
    <div className={classes["movie-poster-list"]}>
      {movies.map((movie) => {
        return (
          <MoviePoster
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        );
      })}
    </div>
  );
};

export default MoviePosterList;
