import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { fetchMovies, fetchMovieDetails } from '../../services/movieService';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: #141414; 
  border-bottom: 1px solid #333; 
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  left: 20px;
  font-size: 1.5em;
  font-weight: bold;
  color: #e50914; 
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #333;
  border-radius: 8px;
  font-size: 1em;
  background-color: #333;
  color: #ffffff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease;
  z-index: 100;

  &:focus {
    border-color: #e50914;
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px); 
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftPanel = styled.div`
  width: 300px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414; 
  border-right: 1px solid #333;
  overflow-y: auto;
  height: 100%; 
`;

const RightPanel = styled.div`
  flex: 1; 
  background-color: #141414;
  padding: 20px;
  overflow-y: auto;
`;

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Batman');

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setMovies([]);
      setSelectedMovie(null);
      return;
    }

    const fetchInitialMovies = async () => {
      const initialMovies = await fetchMovies(searchQuery);
      setMovies(initialMovies || []);
    };

    fetchInitialMovies();
  }, [searchQuery]);

  const handleSelectMovie = async (movie) => {
    const details = await fetchMovieDetails(movie.imdbID);
    setSelectedMovie(details);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>Movie Browser</Logo>
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a movie..."
          />
        </SearchContainer>
      </Header>
      <Container className="container">
        <LeftPanel>
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        </LeftPanel>
        <RightPanel>
          <MovieDetail selectedMovie={selectedMovie} />
        </RightPanel>
      </Container>
    </>
  );
}

export default MoviePage;
