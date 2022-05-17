import React, { Fragment } from "react";
import MovieCarousel from "../newcomponents/MovieCarousel";
import MovieSections from "../components/MovieSections";

const Home = () => {
  return (
    <Fragment>
      <MovieCarousel />
      <MovieSections />
    </Fragment>
  );
};

export default Home;
