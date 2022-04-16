import "./App.css";
import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Error from "./pages/Error";
import Movie from "./pages/Movie";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    // fetchConfiguration();
    // fetchTest();
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
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:movieId">
          <Movie />
        </Route>
        <Route path="/movies">
          <Browse />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

// / => Home.js - this is our landing page where we show nowshowing movies latest movies top rated movies and etc
// /movies/movieid => MovieDetail.js - where we can show trailer views etc and more details
// /movies => browse movies
