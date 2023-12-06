// src/pages/Home/index.jsx
import React, { useState, useEffect } from 'react';
import { BodyContainer, Img, ContainerText, Input, Button } from './styles';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [backdropPaths, setBackdropPaths] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzE3ZDY0ZTc5ODFiNzljN2Q0ZDY0NWRiNTY1NjA1MyIsInN1YiI6IjY1NDkxZjE1NDM0OTRmMDBlNDk0NDdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0dFoXAn6ADFTvLAneAk85Sq1fq5fQ2OTU18LTB2fYr0',
      },
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(data => {
        const paths = data.results
          .filter(movie => movie.backdrop_path)
          .map(movie => movie.backdrop_path);

        setBackdropPaths(paths);

        if (paths.length > 0) {
          setImageUrl('https://www.themoviedb.org/t/p/original/' + paths[0]);
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (backdropPaths.length > 0) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * backdropPaths.length);
        setImageUrl('https://www.themoviedb.org/t/p/original/' + backdropPaths[randomIndex]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [backdropPaths]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    navigate(`/filmes/${searchTerm}`);
  };

  return (
    <BodyContainer>
      <Img src={imageUrl} alt="Banner" />
      <ContainerText>
        <h1>Bem Vindo ao Hub Filmes!</h1>
        <h2>Aqui você encontra os melhores Filmes.</h2>
        <Input value={searchTerm} onChange={handleInputChange} />
        <Button onClick={handleSearchClick}>Pesquise o Filme</Button>
      </ContainerText>
    </BodyContainer>
  );
};

export { Home };
