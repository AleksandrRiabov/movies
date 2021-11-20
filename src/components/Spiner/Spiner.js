import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Spiner({ color = '#fefefe' }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ color }} className={classes.spiner} />
    </div>
  );
}
