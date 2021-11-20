import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Avatars({ author, img }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {img ? (
        <Avatar
          className={classes.large}
          alt={author}
          src={img.slice(1, img.length)}
        />
      ) : (
        <Avatar>{author[0]}</Avatar>
      )}
    </div>
  );
}
