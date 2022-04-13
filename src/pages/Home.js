import React, { Fragment } from "react";
import MoviePosterSection from "../components/MoviePosterSection";
import MovieSliderSection from "../components/MovieSliderSection";
import MovieSections from "../components/MovieSections";

const Home = () => {
  return (
    <Fragment>
      <MovieSliderSection />
      <MovieSections />
    </Fragment>
  );
};

export default Home;
