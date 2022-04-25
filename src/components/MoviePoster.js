import classes from "./MoviePoster.module.css";
import React from "react";
import { useHistory } from "react-router-dom";

import { AiOutlineEye } from "react-icons/ai";

const MoviePoster = ({ poster_path, title, id }) => {
  const history = useHistory();

  const showDetailHandler = () => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className={classes["movie-poster-container"]}>
      <div className={classes["movie-poster"]} onClick={showDetailHandler}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w780/${poster_path}`
              : `/images/image-unavailable.jpg`
          }
          alt=""
          className={classes["movie-poster__img"]}
        />
        <div className={classes["movie-poster-hover"]}>
          <AiOutlineEye />
        </div>
      </div>

      <h2 className={classes.title}>{title}</h2>
    </div>
  );
};

export default MoviePoster;
