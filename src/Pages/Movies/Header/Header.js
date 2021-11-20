import React from 'react';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Filters from './Filters/Filters';
import Container from '@material-ui/core/Container';

const Header = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box
        className={classes.header}
        style={{
          backgroundImage:
            'linear-gradient(104deg, rgba(61,68,88,0.95) 33%, rgba(0,0,0,0.53) 73%), url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces//8Y43POKjjKDGI9MH89NW0NAzzp8.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box className={classes.headerInner}>
          <Box className={classes.headerTop}>
            <Box className={classes.headerText}>
              <Typography className={classes.title} variant={'h3'} gutterBottom>
                {' '}
                Welcome.
              </Typography>
              <Typography className={classes.subtitle} variant={'h4'}>
                {' '}
                Millions of movies to discover.
              </Typography>
              <Typography className={classes.lastSubtitle} variant={'h4'}>
                {' '}
                Explore now.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.filters}>
            <Filters />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
