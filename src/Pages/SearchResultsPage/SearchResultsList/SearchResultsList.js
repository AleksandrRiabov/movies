import React from 'react';
import { Link } from 'react-router-dom';
import MovieCardMedium from '../MovieCardMedium/MovieCardMedium';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './styles';

const SearchResultsList = ({ results, query, loading }) => {
  const classes = useStyles();

  if (loading) {
    const skeletons = new Array(5).fill('');
    return (
      <Box>
        {skeletons.map((skeleton, index) => {
          return (
            <Box key={index} className={classes.skeleton}>
              <Skeleton variant='rect' width={94} height={141} />
              <Box className={classes.skeletonText}>
                <Skeleton />
                <Skeleton variant='rect' height={100} />
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  }

  return (
    <Box>
      {results && results.length ? (
        results.map((movie) => {
          return <MovieCardMedium key={movie.id} movie={movie} />;
        })
      ) : query.length ? (
        <Box className={classes.message}>
          <Typography variant={'h6'} color='textSecondary'>
            {' '}
            No matching results found for <strong>{query}</strong>..
          </Typography>
          <Link to='/'>
            <Typography className={classes.link} color='primary'>
              Go To Main Page..
            </Typography>
          </Link>
        </Box>
      ) : (
        <Box className={classes.message}>
          <Typography variant={'h6'} color='textSecondary'>
            {' '}
            Please add some search criteria..
          </Typography>
          <Link to='/'>
            <Typography className={classes.link} color='primary'>
              Go To Main Page..
            </Typography>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default SearchResultsList;