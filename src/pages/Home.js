import React, { Fragment } from "react";
import MovieCarousel from "../layout/MovieCarousel";
// import MovieSections from "../components/MovieSections";
import MovieSections from "../layout/MovieSections";

const Home = () => {
  return (
    <Fragment>
      <MovieCarousel />
      <MovieSections />
    </Fragment>
  );
};

export default Home;
