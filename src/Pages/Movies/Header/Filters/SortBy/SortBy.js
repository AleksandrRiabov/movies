import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useMoviesContext } from '../../../../../context/moviesContext';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    color: '#fff',
  },
}));

export default function SortBy() {
  const classes = useStyles();
  const { setFilter, filter } = useMoviesContext();

  return (
    <Box className={classes.root}>
      <Typography className={classes.name} gutterBottom>
        {' '}
        Sort By
      </Typography>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: '5px', WebkitAppearance: 'none', background: '#fff' }}
      >
        <option style={{ padding: '5px' }} value='popularity.desc'>
          Populartity
        </option>
        <option value='release_date.desc'>Release Date</option>
        <option value='revenue.desc'>Revenue</option>
        <option value='vote_average.desc'>Top Rated</option>
        <option value='vote_count.desc'>Vote Count</option>
      </select>
    </Box>
  );
}