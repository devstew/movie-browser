import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard/MovieCard';

const ListContainer = styled.div`
  padding: 10px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: #141414; 
  
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  scrollbar-width: none; 

  @media (max-width: 768px) {
    height: auto;
  }
`;

const NoMoviesMessage = styled.p`
  text-align: center;
  color: #888;
  margin-top: 20px;
`;

function MovieList({ movies = [], onSelectMovie }) {
  return (
    <ListContainer>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => onSelectMovie(movie)}
          />
        ))
      ) : (
        <NoMoviesMessage>No movies found.</NoMoviesMessage>
      )}
    </ListContainer>
  );
}

export default MovieList;
