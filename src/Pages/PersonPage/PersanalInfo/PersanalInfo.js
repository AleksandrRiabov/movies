import React from 'react';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const PersanalaInfo = ({
  person: {
    known_for_department,
    movie_credits,
    gender,
    birthday,
    place_of_birth,
    name,
    also_known_as,
  },
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.personalInfo}>
      <Typography variant='h6' className={classes.bold}>
        {' '}
        Personal Info
      </Typography>
      <Box className={classes.wrapper}>
        <Box className={classes.detail}>
          <Typography className={classes.bold}>Known For</Typography>
          <Typography variant='subtitle2'>{known_for_department}</Typography>
        </Box>
        <Box className={classes.detail}>
          <Typography className={classes.bold}>Acting In</Typography>
          <Typography variant='subtitle2'>
            {`${movie_credits.cast.length} Movies`}{' '}
          </Typography>
        </Box>
        <Box className={classes.detail}>
          <Typography className={classes.bold}>Gender</Typography>
          <Typography variant='subtitle2'>
            {gender === 2 ? 'Male' : 'Female'}{' '}
          </Typography>
        </Box>
        <Box className={classes.detail}>
          <Typography className={classes.bold}>Birthday</Typography>
          <Typography variant='subtitle2'>{birthday || 'N/A'} </Typography>
        </Box>
        <Box className={classes.detail}>
          <Typography className={classes.bold}>Place of Birth</Typography>
          <Typography variant='subtitle2'>
            {place_of_birth || 'N/A'}{' '}
          </Typography>
        </Box>
        <Hidden only={['xs', 'sm']}>
          <Box className={classes.detail}>
            <Typography className={classes.bold}>Also Known As</Typography>
            {also_known_as.length
              ? also_known_as.map((name, index) => {
                  return (
                    <Typography key={index} variant='subtitle2'>
                      {name}{' '}
                    </Typography>
                  );
                })
              : 'N/A'}
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default PersanalaInfo;