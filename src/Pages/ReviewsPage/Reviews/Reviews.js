import React from 'react';
import ReviewCard from '../../../components/ReviewCard/ReviewCard';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const Reviews = ({ reviews, title }) => {
  const classes = useStyles();

  const totalReviews = reviews.length;

  return (
    <Container>
      <Box className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Box className={classes.title}>
              <Typography variant='h6'>
                Total ({totalReviews}) {totalReviews > 1 ? 'Reviews' : 'Review'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            {totalReviews ? (
              <Box>
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </Box>
            ) : (
              <Box className={classes.note}>
                <Typography variant='h6'>{`We don't have any reviews for ${title}.`}</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Reviews;
