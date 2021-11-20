import React, { useEffect, useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import Genres from './Genres/Genres';
import SortBy from './SortBy/SortBy';

export default function Filters() {
  const classes = useStyles();
  const [showFilters, setShowFilters] = useState(false);
  const mobile = useRef(null);
  const addBtn = useRef(null);

  useEffect(() => {
    if (showFilters) {
      mobile.current.style.top = '0';
      addBtn.current.style.transform = 'translateX(-500px)';
      window.scroll(0, 0);
    } else {
      mobile.current.style.top = '-100%';
      addBtn.current.style.transform = 'translateX(0)';
    }
  }, [showFilters]);

  return (
    <Container>
      <Box className={classes.root}>
        <Box
          ref={addBtn}
          className={classes.addFiltersBtn}
          onClick={() => setShowFilters(true)}
        >
          <Typography className={classes.btnText}>Add Filters</Typography>
        </Box>

        <Box ref={mobile} className={classes.mobile}>
          <Container>
            <Box className={classes.wrapper}>
              <SortBy />
              <Genres />
            </Box>
          </Container>
          <Box onClick={() => setShowFilters(false)} className={classes.close}>
            Hide Filters
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
