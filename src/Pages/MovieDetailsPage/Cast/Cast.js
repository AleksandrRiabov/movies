import React from 'react';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import HorizontalListing from '../../../components/HorizontalListing/HorizontalListing';

import img_placeholder_W_138x175 from '../../../images/medium/img_placeholder_W_138x175.jpg';
import img_placeholder_M_138x175 from '../../../images/medium/img_placeholder_M_138x175.jpg';
import img_placeholder_NS_138x175 from '../../../images/medium/img_placeholder_NS_138x175.png';

const placeholders = [
  img_placeholder_NS_138x175,
  img_placeholder_W_138x175,
  img_placeholder_M_138x175,
];

const Cast = () => {
  const classes = useStyles();
  const { movieId, credits, loading, error } = useMovieDetailsContext();

  if (loading) {
    return null;
  }

  if (error.isError) {
    return (
      <HorizontalListing title='Top Billed Cast'>
        <Box className={classes.root}>{error.message}</Box>
      </HorizontalListing>
    );
  }

  const actors = credits.cast.slice(0, 9);

  return (
    <>
      <HorizontalListing title='Top Billed Cast'>
        {!credits.cast.length && (
          <p>We don't have any cast added to this movie.</p>
        )}
        {actors.map((actor) => {
          const { name, character, profile_path, id, gender } = actor;
          const personImage = profile_path
            ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
            : placeholders[gender];
          return (
            <Link
              key={id}
              to={`/person/${id}`}
              style={{ display: 'flex', marginLeft: '-10px' }}
            >
              <Box className={classes.card}>
                <Box className={classes.imageWrapper}>
                  <Box className={classes.image}>
                    <img src={personImage} alt={name} />
                  </Box>
                </Box>
                <Box className={classes.cardText}>
                  <Typography className={classes.name} variant='subtitle1'>
                    {name}
                  </Typography>
                  <Typography className={classes.name} variant='caption'>
                    {character}
                  </Typography>
                </Box>
              </Box>
            </Link>
          );
        })}
        {credits.cast.length > 9 && (
          <Link
            to={`/movie/${movieId}/credits`}
            style={{
              display: 'flex',
              marginLeft: '-10px',
              paddingRight: '50px',
            }}
          >
            <Box className={classes.seeMore}>
              <Box className={classes.cardText}>
                <Typography className={classes.name} variant='subtitle1'>
                  View More <ArrowRightAltIcon className={classes.arrowRight} />
                </Typography>
              </Box>
            </Box>
          </Link>
        )}
      </HorizontalListing>
      <Link to={`/movie/${movieId}/credits`}>
        <Typography className={classes.link} variant='h6'>
          {credits.cast.length ? 'Full Cast & Crew' : ''}
        </Typography>
      </Link>
    </>
  );
};

export default Cast;