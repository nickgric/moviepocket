import axios from "axios";

const API_KEY = "020befa6f5b3204d9cdfb69cb3fae25a";
const BASE_URL = "https://api.themoviedb.org/3/";

// https://developers.themoviedb.org/3/trending/get-trending
export const fetchTrend = async (page) => {
  try {
    const { data } = await axios(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

// https://developers.themoviedb.org/3/search/search-movies
export const fetchSearch = async (query, page) => {
  try {
    const { data } = await axios(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

// https://developers.themoviedb.org/3/movies/get-movie-details
export const fetchMovie = async (id) => {
  try {
    const { data } = await axios(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

// https://developers.themoviedb.org/3/movies/get-movie-credits
export const fetchCast = async (id) => {
  try {
    const { data } = await axios(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
