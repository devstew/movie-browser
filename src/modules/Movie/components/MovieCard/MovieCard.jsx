import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s ease;

  &:hover {
    background-color: #f8f8f8;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Info = styled.div`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 8px; 
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em; 
  }
`;

const Year = styled.p`
  margin: 0;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.9em; 
  }
`;

const Poster = styled.img`
  width: 50px;
  height: auto;
  border-radius: 4px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px; 
  }
`;

function MovieCard({ movie, onClick }) {
  return (
    <Card onClick={onClick}>
      <Poster src={movie.Poster} alt={movie.Title} />
      <Info>
        <Title>{movie.Title}</Title>
        <Year>{movie.Year}</Year>
      </Info>
    </Card>
  );
}

export default MovieCard;
