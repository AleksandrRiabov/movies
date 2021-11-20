import React from 'react';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';
import { Link } from 'react-router-dom';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const Reviews = ({ one }) => {
  const classes = useStyles();

  const { reviews, movieId, title, loading, error } = useMovieDetailsContext();

  if (loading) {
    return null;
  }

  if (error.isError) {
    return <Box className={classes.root}>{error.message}</Box>;
  }

  const total = reviews.length;

  return (
    <Box>
      <Box>
        <Box className={classes.title}>
          <Typography variant='h6'>Reviews ({total})</Typography>
        </Box>
        {total ? (
          <ReviewCard review={reviews[total - 1]} />
        ) : (
          `We don't have any reviews for ${title}.`
        )}
      </Box>
      {total > 1 && (
        <Box className={classes.title}>
          <Link to={`/movie/${movieId}/reviews`}>
            <Typography variant='h6'>Read All Reviews</Typography>
          </Link>
        </Box>
      )}
      <hr />
    </Box>
  );
};

export default Reviews;