import "../styles/components/MoviePoster.scss";
import React from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MoviePoster = ({ poster_path, title, id }) => {
  const history = useHistory();

  const showDetailHandler = () => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className="movie-poster">
      <div className="movie-poster__display" onClick={showDetailHandler}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w780/${poster_path}`
              : `/images/image-unavailable.jpg`
          }
          alt=""
          className="movie-poster__image"
        />
        <div className="movie-poster__hover-overlay">
          <AiOutlineEye />
        </div>
      </div>

      <h3 className="movie-poster__title">{title}</h3>
    </div>
  );
};

export default MoviePoster;
