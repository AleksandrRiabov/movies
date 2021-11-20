import React from 'react';
import { useMovieDetailsContext } from '../../../../context/movieDetailsContext';
import Spiner from '../../../../components/Spiner/Spiner';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const TopCrew = () => {
  const { credits, loading, error } = useMovieDetailsContext();
  const classes = useStyles();

  if (loading) {
    return (
      <Box className={classes.root}>
        <Spiner color='#5f5f5f' />
      </Box>
    );
  }

  if (error.isError) {
    return <Box className={classes.root}>{error.message}</Box>;
  }

  const JOB_TITLES = ['Director', 'Writer', 'Story', 'Creator'];
  const crew = credits.crew.filter(({ job }) => JOB_TITLES.includes(job));

  return (
    <Box className={classes.creatorsBox}>
      {crew.map((member, index) => {
        return (
          <Box key={index} className={classes.creator}>
            <Typography>{member.name}</Typography>
            <Typography variant='caption'>{member.job}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default TopCrew;