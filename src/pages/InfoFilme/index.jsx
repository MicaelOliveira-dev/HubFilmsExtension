// src/pages/InfoFilmes/index.jsx
import React from 'react';
import { TiStar } from 'react-icons/ti';
import { Container, Img, Title, Text, Popularidade, Button } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const InfoFilmes = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  const navigate = useNavigate();

  
  if (!movie) {
    return null;
  }

  const handleBackToSearch = () => {
    navigate('/'); 
  };

  return (
    <Container>
      <Img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Popularidade>
        Popularidade: {movie.popularity} <TiStar />
      </Popularidade>
      <Text>{movie.overview}</Text>
      <Button onClick={handleBackToSearch}>Voltar a Pesquisar</Button>
    </Container>
  );
};

export { InfoFilmes };
