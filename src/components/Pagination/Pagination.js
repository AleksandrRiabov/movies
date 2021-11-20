import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    textAlign: 'center',
    padding: '10px 0',
  },
  ul: {
    justifyContent: 'center',
    margin: '0',
    '& .MuiPaginationItem-root': {
      color: '#555',
      margin: '0',
      padding: '1px',
    },
  },
}));

export default function PaginationBar({
  total_pages,
  page,
  setPage,
  setLoading,
}) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    if (value === page) {
      return;
    }
    setPage(value);
    window.scroll(0, 400);
  };

  return (
    <div className={classes.root}>
      <Pagination
        classes={{ ul: classes.ul }}
        count={total_pages}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
