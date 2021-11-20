import React, { useRef } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const HorizontalListing = ({ children, title }) => {
  const classes = useStyles();
  const content = useRef(null);
  const cTransition = useRef(null);

  const handleColorTransition = () => {
    if (content.current.scrollLeft > 50) {
      cTransition.current.style.opacity = 0;
    } else {
      cTransition.current.style.opacity = 1;
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.sectionTitle}>
        <Typography variant={'h5'}>{title}</Typography>
      </Box>
      <Box
        onScroll={() => handleColorTransition()}
        ref={content}
        className={classes.sectionScroll}
      >
        {children}
      </Box>
      <Box ref={cTransition} className={classes.colorTransition}></Box>
    </Box>
  );
};

export default HorizontalListing;
