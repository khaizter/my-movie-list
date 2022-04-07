import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchMovieDetails } from "../data";
import Error from "./Error";

const MovieDetail = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchMovieDetails(movieId);
      console.log(data);
      setMovieData(data);
    };
    fetchApi();
  }, []);

  if (!movieData) {
    return <div>fetching data...</div>;
  }

  // if the api return a status_code instead it means the request fail and we render error instead
  if (movieData.status_code) {
    return <Error />;
  }

  if (movieData) {
    return (
      <div>
        Movie Details
        <p>{movieData.title}</p>
        <p>{movieData.overview}</p>
        <ul>
          {movieData.genres &&
            movieData.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
      </div>
    );
  }
};

export default MovieDetail;
