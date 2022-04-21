import React, { Fragment } from "react";
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
