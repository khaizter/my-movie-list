import "./App.css";
import React, { useEffect, useState } from "react";
import MoviePoster from "./components/MoviePoster";
import MoviePosterList from "./components/MoviePosterList";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=eb56800a149ce9fa8f8b67af5e2a01ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>My Movie List</h1>
      <MoviePosterList movies={movies} />
    </div>
  );
}

export default App;
