import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #141414;
  color: #ffffff;
  flex-grow: 1; /* Takes up all the remaining space */
  width: 100%; /* Ensures it stretches across the full width */
  min-width: 0; /* Prevents overflow */
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
`;

const Poster = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const NoSelection = styled.div`
  text-align: center;
  color: #888;
  padding: 50px;
  width: 100%; /* Ensures full width */
`;

function MovieDetail({ selectedMovie }) {
  if (!selectedMovie) {
    return (
      <DetailContainer $isVisible={!!selectedMovie}>
        <NoSelection>Select a movie to see details</NoSelection>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer $isVisible={!!selectedMovie}>
      <Poster src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
      <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
      <p><strong>Director:</strong> {selectedMovie.Director}</p>
      <p><strong>Cast:</strong> {selectedMovie.Actors}</p>
      <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
      <p><strong>Ratings:</strong> {selectedMovie.imdbRating}</p>
    </DetailContainer>
  );
}

export default MovieDetail;
