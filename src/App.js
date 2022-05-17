import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Error from "./pages/Error";
import Movie from "./pages/Movie";
import Header from "./layout/Header";
import Footer from "./components/Footer";

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
        console.log(data);
      });
  };

  const fetchTest = async () => {
    fetch(
      `
      https://api.themoviedb.org/3/genre/movie/list?api_key=eb56800a149ce9fa8f8b67af5e2a01ab&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/my-movie-list/" exact>
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
      <Footer />
    </Fragment>
  );
}

export default App;

// / => Home.js - this is our landing page where we show nowshowing movies latest movies top rated movies and etc
// /movies/movieid => MovieDetail.js - where we can show trailer views etc and more details
// /movies => browse movies
