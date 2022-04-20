import classes from "./MovieDetail.module.css";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams, Link } from "react-router-dom";
import Modal from "./Modal";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieVideos,
  imageUrl,
} from "../data";
import Error from "../pages/Error";

const convertMinutesToHours = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};

const MovieDetail = () => {
  const [details, setDetails] = useState({});
  const [credits, setCredits] = useState({});
  const [videos, setVideos] = useState({});
  const { movieId } = useParams();

  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const detailsData = await fetchMovieDetails(movieId);
      setDetails(detailsData);

      const creditsData = await fetchMovieCredits(movieId);
      setCredits(creditsData);

      const videosData = await fetchMovieVideos(movieId);
      setVideos(videosData);
    };
    fetchApi();
  }, [movieId]);

  if (!details) {
    return <div>fetching data...</div>;
  }

  // if the api return a status_code instead it means the request fail and we render error instead
  if (details.status_code) {
    return <Error />;
  }

  if (details) {
    return (
      <div className={classes["movie-details-container"]}>
        <section className={classes["movie-overview-section"]}>
          <div className={classes["movie-poster-container"]}>
            <img src={`${imageUrl}w342/${details.poster_path}`} alt=""></img>
            <button onClick={() => setShowTrailer(true)}>Watch Trailer</button>
          </div>

          <div className={classes["movie-info-container"]}>
            <h1 className={classes["movie-info-container__title"]}>
              {details.title}
            </h1>
            <p className={classes["movie-info-container__overview"]}>
              {details.overview}
            </p>
            <p className={classes["movie-info-container__runtime"]}>
              Runtime: {convertMinutesToHours(details.runtime)}
            </p>
            <ul className={classes["movie-info-container__genres"]}>
              <h2>Genres:</h2>
              {details.genres &&
                details.genres.map((genre) => {
                  return (
                    <li key={genre.id}>
                      <Link
                        to="/"
                        className={classes["movie-info-container__genre"]}
                      >
                        {genre.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>

        <section className={classes["movie-cast-section"]}>
          <h2>Cast</h2>
          <ul>
            {credits.cast &&
              credits.cast.slice(0, 3).map((artist) => {
                return (
                  <li key={artist.id}>
                    <img
                      src={
                        artist.profile_path
                          ? `${imageUrl}w185/${artist.profile_path}`
                          : `/images/image-unavailable.jpg`
                      }
                      alt=""
                    ></img>
                    {artist.name}
                  </li>
                );
              })}
          </ul>
        </section>

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
