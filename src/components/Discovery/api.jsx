import axios from "axios";

const API_KEY = "c45ad94907215e117fb3a6851e09e11c";
const BASE_URL = "https://api.themoviedb.org/3";

const api = {
  fetchGenres: async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.genres;
  },
  searchMovies: async (query, genres) => {
    const genresString = genres.join(",");

    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        with_genres: genresString,
      },
    });
    return response.data.results;
  },
};

export default api;
