import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const ResultsStats = ({ title, total_results }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.title}>
        <Typography variant='h6'>{title}</Typography>
      </Box>
      <Box className={classes.note}>
        <Typography variant='h6'>{`Movies: ${total_results || 0}`}</Typography>
      </Box>
    </Paper>
  );
};

export default ResultsStats;
