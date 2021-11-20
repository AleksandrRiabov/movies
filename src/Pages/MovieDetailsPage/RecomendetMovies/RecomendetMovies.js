import React from 'react';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import HorizontalListing from '../../../components/HorizontalListing/HorizontalListing';
import MovieCardSmall from '../../../components/MovieCardSmall/MovieCardSmall';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '200px',
  },
}));

const RecomendetMovies = () => {
  const classes = useStyles();
  const {
    details: { recommendations },
    loading,
    error,
  } = useMovieDetailsContext();

  if (loading) {
    return null;
  }

  if (error.isError) {
    return (
      <HorizontalListing title='Recommendations'>
        <Box className={classes.root}>{error.message}</Box>
      </HorizontalListing>
    );
  }

  return (
    <HorizontalListing title='Recommendations'>
      {recommendations && recommendations.results.length ? (
        recommendations.results.map((movie) => {
          return <MovieCardSmall key={movie.id} movie={movie} />;
        })
      ) : (
        <p>We don't have enough data to suggest any movies.</p>
      )}
    </HorizontalListing>
  );
};

export default RecomendetMovies;
