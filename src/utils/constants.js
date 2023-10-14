import POSTER_NOT_FOUND from "../assets/images/poster-not-found.jpg";
import BACKDROP_NOT_FOUND from "../assets/images/backdrop-not-found.jpg";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY; // API key: a95fc70b1b67176c1e08456dd4021430 REACT_APP_API_KEY=<YOUR_API_KEY>
const POSTER_URL = "https://image.tmdb.org/t/p/w780";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";

export {
  BASE_URL,
  API_KEY,
  POSTER_NOT_FOUND,
  BACKDROP_NOT_FOUND,
  POSTER_URL,
  BACKDROP_URL,
};
