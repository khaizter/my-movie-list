import "../styles/layout/MovieSection.scss";
import React from "react";
// import MoviePoster from "../components/MoviePoster";
import MoviePoster from "../newcomponents/MoviePoster";

const MovieSection = ({ movies, title = "Movie Section" }) => {
  return (
    <section className="movie-section">
      <h1 className="movie-section__section-title">{title}</h1>
      <div className="movie-section__movie-list">
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
