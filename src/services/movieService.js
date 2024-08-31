import axios from 'axios';

const API_KEY = 'f452cd87';
const BASE_URL = 'http://www.omdbapi.com/';

// Function to fetch movies based on a search query
export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    return response.data.Search; // Return the list of movies
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

// Function to fetch detailed information about a single movie
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data; // Return detailed movie data
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
