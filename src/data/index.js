const apiKey = "eb56800a149ce9fa8f8b67af5e2a01ab";
const url = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/";
const discoverUrl = `${url}/discover/movie?api_key=${apiKey}&page=1`;
const nowPlayingUrl = `${url}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
const movieDetailsUrl = `${url}/movie/movieId?api_key=${apiKey}&language=en-US&append_to_response=videos,credits`;
const popularMoviesUrl = `${url}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const topratedMoviesUrl = `${url}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
const upcomingMoviesUrl = `${url}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
const searchMoviesUrl = `${url}/search/movie?api_key=${apiKey}&language=en-US&query=keyword&page=1&include_adult=false`;
const genresUrl = `${url}/genre/movie/list?api_key=${apiKey}&language=en-US`;
// const genreMoviesUrl = ``;
export const fetchDiscover = async (page = 1) => {
  // fetch(discoverUrl.replace("page=1", `page=${page}`))
  //   .then((res) => res.json())
  //   .then((data) => {
  //     return data.results;
  //   });

  const response = await fetch(discoverUrl.replace("page=1", `page=${page}`));
  const data = await response.json();
  return data;
};

export const fetchNowPlaying = async () => {
  const response = await fetch(nowPlayingUrl);
  const data = await response.json();
  return data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(movieDetailsUrl.replace("movieId", movieId));
  const data = await response.json();
  return data;
};

export const fetchPopularMovies = async () => {
  const response = await fetch(popularMoviesUrl);
  const data = await response.json();
  return data;
};

export const fetchTopratedMovies = async () => {
  const response = await fetch(topratedMoviesUrl);
  const data = await response.json();
  return data;
};

export const fetchUpcomingMovies = async () => {
  const response = await fetch(upcomingMoviesUrl);
  const data = await response.json();
  return data;
};

export const fetchSearchMovies = async (keyword = "", page = 1) => {
  // const keywordProp = keyword.trim() !== "" ? "&with_keywords=" + keyword : "";
  // const pageProp = page !== 1 ? "&page=" + page : "";

  let response;
  if (keyword.trim() === "") {
    response = await fetch(discoverUrl.replace("page=1", `page=${page}`));
  } else {
    const modifiedKeyword = searchMoviesUrl.replace("keyword", keyword);
    const modifiedPage = modifiedKeyword.replace("page=1", `page=${page}`);
    response = await fetch(modifiedPage);
  }
  const data = await response.json();
  return data;
};

export const fetchGenres = async () => {
  const response = await fetch(genresUrl);
  const data = await response.json();
  return data;
};

export const fetchGenreMovies = async (genreId, page = 1) => {
  const genreKey = "&with_genres=" + genreId;
  const response = await fetch(
    discoverUrl.replace("page=1", `page=${page}`) + genreKey
  );
  const data = await response.json();
  return data;
};
