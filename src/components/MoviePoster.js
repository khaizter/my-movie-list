import classes from "./MoviePoster.module.css";
import React from "react";
import { useHistory } from "react-router-dom";

const MoviePoster = ({ poster_path, title, id }) => {
  const history = useHistory();

  const showDetailHandler = () => {
    console.log(id);
    history.push(`/movies/${id}`);
  };

  return (
    <div className={classes["movie-poster"]}>
      <img
        src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
        alt=""
        onClick={showDetailHandler}
      ></img>
      <h2>{title}</h2>
    </div>
  );
};

export default MoviePoster;
