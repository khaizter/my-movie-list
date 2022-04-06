import "./App.css";
import React, { Fragment, useEffect } from "react";
import MovieSliderSection from "./components/MovieSliderSection";
import MoviePosterSection from "./components/MoviePosterSection";

function App() {
  useEffect(() => {
    fetchConfiguration();
    fetchTest();
  }, []);

  const fetchConfiguration = async () => {
    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=eb56800a149ce9fa8f8b67af5e2a01ab`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  const fetchTest = async () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=eb56800a149ce9fa8f8b67af5e2a01ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  return (
    <Fragment>
      <MovieSliderSection />
      <MoviePosterSection />
    </Fragment>
  );
}

export default App;
