import classes from "./MoviePoster.module.css";
import React from "react";
import { useHistory } from "react-router-dom";

const MoviePoster = ({ poster_path, title, id }) => {
  const history = useHistory();

  const showDetailHandler = () => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className={classes["movie-poster"]}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w780/${poster_path}`
            : `/images/image-unavailable.jpg`
        }
        alt=""
        onClick={showDetailHandler}
      ></img>
      <h2 className={classes.title}>{title}</h2>
    </div>
  );
};

export default MoviePoster;
