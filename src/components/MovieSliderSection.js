import classes from "./MovieSliderSection.module.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchNowPlaying } from "../data";

const MovieSliderSection = () => {
  const [movies, setMovies] = useState([]);
  const numberOfShowcase = 6;

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchNowPlaying();
      setMovies(data.results.slice(0, numberOfShowcase));
    };
    fetchApi();
  }, []);

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      emulateTouch={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
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
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>{movie.genre_ids}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MovieSliderSection;
