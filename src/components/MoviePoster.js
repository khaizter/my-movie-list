import classes from "./MoviePoster.module.css";
import React from "react";

const MoviePoster = ({ poster_path, title }) => {
  return (
    <div className={classes["movie-poster"]}>
      <img src={`https://image.tmdb.org/t/p/w780/${poster_path}`} alt=""></img>
      <h2>{title}</h2>
    </div>
  );
};

export default MoviePoster;
