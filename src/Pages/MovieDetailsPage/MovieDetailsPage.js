import React from 'react';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MovieDetailsHeader from './MovieDetailsHeader/MovieDetailsHeader';
import Cast from './Cast/Cast';
import StatisticsBar from './StatisticsBar/StatisticsBar';
import RecomendetMovies from './RecomendetMovies/RecomendetMovies';
import ReviewsSection from './ReviewsSection/ReviewsSection';
import MovieTrailer from './MovieTrailer/MovieTrailer';

const MovieDetailsPage = () => {
  const classes = useStyles();

  return (
    <Box>
      <MovieDetailsHeader />
      <Box className={classes.whiteSection}>
        <Container className={classes.witeSectionWrapper}>
          <Grid container spaces={3}>
            <Grid item xs={12} md={9}>
              <Box className={classes.leftColumn}>
                <Cast />
                <hr />
                <ReviewsSection />
                <MovieTrailer />
                <RecomendetMovies />
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <StatisticsBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MovieDetailsPage;