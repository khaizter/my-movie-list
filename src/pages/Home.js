import React, { Fragment } from "react";
import MoviePosterSection from "../components/MoviePosterSection";
import MovieTrailerSection from "../components/MovieSliderSection";

const Home = () => {
  return (
    <Fragment>
      <MovieTrailerSection />
      <MoviePosterSection />
    </Fragment>
  );
};

export default Home;
