import classes from "./MovieSliderSection.module.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchNowPlaying } from "../data";

const MovieSliderSection = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const numberOfShowcase = 6;

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

  const trailerHandler = () => {};

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      emulateTouch={true}
      infiniteLoop={true}
      interval={5000}
      autoPlay={true}
      className={classes["carousel-container"]}
    >
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            className={classes["movie-slide"]}
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`,
            }}
          >
            <div className={classes["movie-slide__content-box"]}>
              <h1 className={classes["movie-slide__title"]}>{movie.title}</h1>
              <p className={classes["movie-slide__overview"]}>
                {movie.overview}
              </p>
              <div className={classes["movie-slide__actions"]}>
                <button
                  className={classes["movie-slide__more-details"]}
                  onClick={detailsHandler.bind(null, movie.id)}
                >
                  MORE DETAILS
                </button>
                <button className={classes["movie-slide__trailer"]}>
                  SEE TRAILER
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieSliderSection;
