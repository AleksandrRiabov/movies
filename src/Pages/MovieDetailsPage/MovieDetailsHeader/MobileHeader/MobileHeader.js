import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import TitleSection from '../TitleSection/TitleSection';
import Spiner from '../../../../components/Spiner/Spiner';
import WatchProviders from '../WatchProviders/WatchProviders';
import TopCrew from '../TopCrew/TopCrew';

const MovieDetailsHeader = ({ details, loading, error }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Box className={classes.Background}>
        {' '}
        <Spiner />
      </Box>
    );
  }

  if (error.isError) {
    return <Box className={classes.darkBackground}>{error.message}</Box>;
  }

  const { backdrop_path, poster_path, tagline, overview } = details;

  const backgroundImage = `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
    backdrop_path || poster_path
  })`;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <Box>
      <div
        style={{
          width: '100%',
          position: 'realtive',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: backgroundImage,
        }}
      >
        <Box className={classes.headerPoster}>
          <img
            style={{ width: '100%', borderRadius: '5px' }}
            src={poster}
            alt='alt'
          />
        </Box>
      </div>

      <Container className={classes.headerInner}>
        <Box className={classes.headerDetails}>
          <TitleSection />
          <Box className={classes.tagline}>
            <Typography>{tagline}</Typography>
          </Box>
          <Box>
            <h3>Overview</h3>
          </Box>
          <Box>
            <Typography gutterBottom>{overview}</Typography>
          </Box>
          <TopCrew />
          <WatchProviders />
        </Box>
      </Container>
    </Box>
  );
};
export default MovieDetailsHeader;

