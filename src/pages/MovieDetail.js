import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams, useHistory } from "react-router-dom";
import Modal from "../components/Modal";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieVideos,
  imageUrl,
} from "../data";
import Error from "./Error";

const MovieDetail = () => {
  const history = useHistory();
  const [details, setDetails] = useState({});
  const [credits, setCredits] = useState({});
  const [videos, setVideos] = useState({});
  const { movieId } = useParams();

  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const detailsData = await fetchMovieDetails(movieId);
      console.log(detailsData);
      setDetails(detailsData);

      const creditsData = await fetchMovieCredits(movieId);
      console.log(creditsData);
      setCredits(creditsData);

      const videosData = await fetchMovieVideos(movieId);
      console.log(videosData);
      setVideos(videosData);
    };
    fetchApi();
  }, []);

  if (!details) {
    return <div>fetching data...</div>;
  }

  // if the api return a status_code instead it means the request fail and we render error instead
  if (details.status_code) {
    return <Error />;
  }

  if (details) {
    return (
      <div>
        Movie Details
        <img src={`${imageUrl}w342/${details.poster_path}`} alt=""></img>
        <button onClick={() => setShowTrailer(true)}>Trailer</button>
        <p>{details.title}</p>
        <p>{details.overview}</p>
        <p>{details.runtime}</p>
        <p>Genres</p>
        <ul>
          {details.genres &&
            details.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
        </ul>
        <p>Cast</p>
        <ul>
          {credits.cast &&
            credits.cast.slice(0, 3).map((artist) => {
              return (
                <li key={artist.id}>
                  <img
                    src={`${imageUrl}w185/${artist.profile_path}`}
                    alt=""
                  ></img>
                  {artist.name}
                </li>
              );
            })}
        </ul>
        <Modal showModal={showTrailer} onClose={() => setShowTrailer(false)}>
          <p>Trailer</p>
          {videos.results && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
              playing
              controls={true}
            />
          )}
          <button onClick={() => setShowTrailer(false)}>Back</button>
        </Modal>
      </div>
    );
  }
};

export default MovieDetail;
