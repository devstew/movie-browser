import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    return response.data.Search;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
