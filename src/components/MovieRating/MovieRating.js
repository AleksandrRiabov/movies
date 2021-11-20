import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const MovieRating = ({ rating }) => {
  return (
    <div>
      <Box borderColor='transparent'>
        <Rating size='small' defaultValue={rating} max={10} readOnly />
      </Box>
    </div>
  );
};

export default MovieRating;
