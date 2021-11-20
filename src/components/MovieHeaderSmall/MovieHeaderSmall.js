import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useStyles } from './styles';

const MovieHeaderSmall = ({
  movie: { title, poster_path, id, release_date },
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.content}>
          <Box className={classes.imageWrapper}>
            <img
              src={`https://www.themoviedb.org/t/p/w58_and_h87_face/${poster_path}`}
              alt={title}
            />
          </Box>
          <Box className={classes.links}>
            <Box>
              <Link to={`/movie/${id}`}>
                <Typography variant='h4' className={classes.title}>
                  {title}
                </Typography>
                {release_date && (
                  <Typography
                    variant='h4'
                    className={classes.year}
                  >{`(${release_date.slice(0, 4)})`}</Typography>
                )}
              </Link>
            </Box>
            <Box>
              <Link to={`/movie/${id}`} className={classes.flexWrapper}>
                <ArrowBackIcon className={classes.arrow} />
                <Typography className={classes.goBack}>Back to Main</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieHeaderSmall;
