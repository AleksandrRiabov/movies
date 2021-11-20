import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    overflow: 'hidden',
  },
}));

const Text = ({ children, size = 450 }) => {
  const [showMore, setShowMore] = useState(false);
  const classes = useStyles();
  const lng = children.length;

  return (
    <Typography className={classes.root} variant='body1'>
      {showMore
        ? `${children}  `
        : `${children.slice(0, size)}${lng > size ? '...' : ''} `}
      <span
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less' : lng > size ? 'Show More' : ''}
      </span>
    </Typography>
  );
};

export default Text;
