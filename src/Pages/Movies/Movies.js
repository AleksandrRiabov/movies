import React from 'react';
import Header from './Header/Header';
import MoviesSection from './MoviesSection/MoviesSection';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Movies = () => {
  return (
    <Box>
      <Header />
      <Container>
        <MoviesSection />
      </Container>
    </Box>
  );
};

export default Movies;
