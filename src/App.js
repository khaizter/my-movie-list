import "./App.css";
import React, { useEffect, useState } from "react";
import MoviePosterList from "./components/MoviePosterList";
import MoviePagination from "./components/MoviePagination";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=eb56800a149ce9fa8f8b67af5e2a01ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);

  const prevPage = () =>
    setCurrentPage((currentValue) => {
      if (currentValue === 1) return currentValue;
      return currentValue - 1;
    });

  return (
    <div className="App">
      <h1>My Movie List</h1>
      <MoviePosterList movies={movies} />
      <MoviePagination nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default App;
