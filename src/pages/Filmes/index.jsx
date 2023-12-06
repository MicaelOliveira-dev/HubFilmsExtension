// src/pages/Filmes/index.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Container, Card, CardContainer, HoverCard, HoverImage, HoverTitle, DetailsButton, Title } from './styles';
import { useNavigate, useParams } from 'react-router-dom'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Filmes = () => {
  const [movies, setMovies] = useState([]);
  const { searchTerm } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzE3ZDY0ZTc5ODFiNzljN2Q0ZDY0NWRiNTY1NjA1MyIsInN1YiI6IjY1NDkxZjE1NDM0OTRmMDBlNDk0NDdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0dFoXAn6ADFTvLAneAk85Sq1fq5fQ2OTU18LTB2fYr0'; // Substitua pelo seu API Key
        const apiUrl = 'https://api.themoviedb.org/3/search/movie';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        };

        const response = await fetch(
          `${apiUrl}?api_key=${apiKey}&query=${searchTerm}`, 
          options
        );

        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Erro:', error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  const settings = {
    infinite: false,
    slidesToShow: 4, 
    speed: 500,
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <>
      <Title>Resultado da sua Busca</Title>
      <Container>
        <Slider {...settings}>
          {movies.map((movie) => (
            <CardContainer key={movie.id}>
              <Card onClick={() => navigate(`/info-filmes/${movie.id}`, { state: { movie } })}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <HoverCard>
                  <HoverImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <HoverTitle>{movie.title}</HoverTitle>
                  <DetailsButton>Ver Detalhes</DetailsButton>
                </HoverCard>
              </Card>
            </CardContainer>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export { Filmes };
