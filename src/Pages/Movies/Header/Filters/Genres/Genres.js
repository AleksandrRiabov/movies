import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { useMoviesContext } from '../../../../../context/moviesContext';
import clsx from 'clsx';
import { GENRES } from '../../../../../api/api';
import { useStyles } from './styles';

const Genres = () => {
  const { selectedGenres, selectGenre } = useMoviesContext();
  const classes = useStyles();
	
  return (
    <Box className={classes.genresWrapper}>
      {GENRES.map((genre) => {
        return (
          <Button
            onClick={() => selectGenre(genre.id)}
            key={genre.id}
            data={genre.id}
            variant='outlined'
            className={clsx(
              classes.genre,
              selectedGenres.includes(genre.id) && classes.slectedGenre
            )}
          >
            {genre.name}
          </Button>
        );
      })}
      {selectedGenres.length > 1 ? (
        <Box onClick={() => selectGenre('reset')} className={classes.resetBtn}>
          Remove All <CancelOutlinedIcon />
        </Box>
      ) : (
        ''
      )}
    </Box>
  );
};

export default Genres;
