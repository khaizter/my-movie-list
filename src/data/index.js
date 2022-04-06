const apiKey = "eb56800a149ce9fa8f8b67af5e2a01ab";
const url = "https://api.themoviedb.org/3";
const discoverUrl = `${url}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const nowPlayingUrl = `${url}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

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
