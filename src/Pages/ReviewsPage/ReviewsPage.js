import React from 'react';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews/Reviews';
import MovieHeaderSmall from '../../components/MovieHeaderSmall/MovieHeaderSmall';
import Spiner from '../../components/Spiner/Spiner';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  reviewsPage: {
    position: 'relative',
    width: '100%',
    minHeight: '90vh',
    background: '#fff',
    paddingTop: '15px',
  },
}));

const ReviewsPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { data, loading, error } = useFetchDetails({ id, extra: ['reviews'] });

  if (loading) {
    return (
      <Box>
        {' '}
        <Spiner />
      </Box>
    );
  }

  if (error.isError) {
    return <Box>{error.message}</Box>;
  }

  return (
    <Box className={classes.reviewsPage}>
      <MovieHeaderSmall movie={data} />
      <Reviews reviews={data.reviews.results} title={data.title} />
    </Box>
  );
};

export default ReviewsPage;
