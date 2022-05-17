import "../styles/layout/MovieCarousel.scss";

import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchNowPlaying } from "../data";
// import MovieTrailer from "./MovieTrailer";
import MovieTrailer from "../components/MovieTrailer";

const MovieCarousel = () => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const numberOfShowcase = 6;
  const [currentMovieId, setCurrentMovieId] = useState();
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchNowPlaying();
      setMovies(data.results.slice(0, numberOfShowcase));
    };
    fetchApi();
  }, []);

  const detailsHandler = (id) => {
    history.push(`/movies/${id}`);
  };

  const trailerHandler = (movieId) => {
    setShowTrailer(true);
    setCurrentMovieId(movieId);
  };

  return (
    <Fragment>
      <Carousel
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        infiniteLoop={true}
        interval={5000}
        autoPlay={false}
        className="movie-carousel"
      >
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="movie-carousel__movie-slide"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`,
              }}
            >
              <div className="movie-carousel__movie-details">
                <h1 className="movie-carousel__movie-title">{movie.title}</h1>
                <p className="movie-carousel__movie-overview">
                  {movie.overview}
                </p>
                <div className="movie-carousel__actions">
                  <button
                    className="movie-carousel__cta"
                    onClick={detailsHandler.bind(null, movie.id)}
                  >
                    MORE DETAILS
                  </button>
                  <button
                    className="movie-carousel__cta"
                    onClick={trailerHandler.bind(null, movie.id)}
                  >
                    SEE TRAILER
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <MovieTrailer
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
        movieId={currentMovieId}
      />
    </Fragment>
  );
};

export default MovieCarousel;
