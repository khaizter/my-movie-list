import classes from "./MovieSection.module.css";
import React from "react";
import MoviePoster from "./MoviePoster";

const MovieSection = ({ movies, title = "Movie Section" }) => {
  return (
    <section className={classes.section}>
      <h1 className={classes["section-title"]}>{title}</h1>
      <div className={classes["movie-list"]}>
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
    </section>
  );
};

export default MovieSection;
