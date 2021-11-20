import React from 'react';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';

import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import SocialLinks from '../../../components/SocialLinks/SocialLinks';

const StatisticsBar = () => {
  const classes = useStyles();
  const { details, loading, error } = useMovieDetailsContext();

  if (loading) {
    return null;
  }

  if (error.isError) {
    return <Box>{error.message}</Box>;
  }

  if (!details.production_companies) {
    return null;
  }
  const { budget, revenue, status } = details;

  return (
    <Box className={classes.root}>
      <Box>
        <Box>
          <Box>
            <SocialLinks details={details} />
          </Box>
          <Box className={classes.fact}>
            <Typography variant='h6'> Status </Typography>
            <Typography variant='subtitle1'> {status || '-'}</Typography>
          </Box>
          <Box className={classes.fact}>
            <Typography variant='h6'> Budget </Typography>
            <Typography variant='subtitle1'>
              {' '}
              {budget ? commafy(budget, 2, '$') : '-'}
            </Typography>
          </Box>
          <Box className={classes.fact}>
            <Typography variant='h6'> Revenue </Typography>
            <Typography variant='subtitle1'>
              {' '}
              {revenue ? commafy(revenue, 2, '$') : '-'}
            </Typography>
          </Box>
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default StatisticsBar;

function commafy(num, prec, currSign) {
  if (prec == null) prec = 2;
  let str = parseFloat(num).toFixed(prec).toString().split('.');
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return (currSign == null ? '' : currSign + ' ') + str.join('.');
}