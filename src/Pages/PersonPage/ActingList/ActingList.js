import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';

const ActingList = ({ cast }) => {
  const classes = useStyles();

  const sortedByDate = sliceAndSort(cast);

  let releaseDate;

  const movies = sortedByDate.map((movie, indx) => {
    const { release_date, title, character, id } = movie;
    const isSameYear = releaseDate === release_date;

    releaseDate = release_date;
    return (
      <Box key={movie.id}>
        {!isSameYear && indx !== 0 && (
          <Box className={classes.horizontalLine}></Box>
        )}
        <Box className={classes.movie}>
          <Box className={classes.date}>
            <Typography variant='subtitle1' className={classes.bold}>
              {release_date === '9999' ? (
                <RemoveIcon fontSize='small' />
              ) : (
                release_date
              )}
            </Typography>
          </Box>
          <Box className={classes.titleWrapper}>
            <Link to={`/movie/${id}`}>
              <Typography variant='subtitle1' className={classes.title}>
                {title}
              </Typography>
            </Link>
            <Typography variant='subtitle1' className={classes.character}>
              {character && `as ${character}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <>
      <Typography variant='h5' gutterBottom>
        Acting{' '}
      </Typography>
      <Paper className={classes.root}>{movies}</Paper>
    </>
  );
};

export default ActingList;

function sliceAndSort(cast) {
  const slicedDate = cast.map((movie) => {
    const { release_date } = movie;
    if (release_date) {
      return { ...movie, release_date: release_date.slice(0, 4) };
    } else {
      return { ...movie, release_date: '9999' }; // Needs to sort correctly
    }
  });

  const sortedByDate = slicedDate.sort((a, b) => {
    return parseInt(b.release_date) - parseInt(a.release_date);
  });
  return sortedByDate;
}
