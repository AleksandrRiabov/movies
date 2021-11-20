import React from 'react';
import { useSearchMovies } from '../../hooks/useSearchMovies';
import { useLocation, Link } from 'react-router-dom';
import ResultsStats from './ResultsStats/ResultsStats';
import SearchResultsList from './SearchResultsList/SearchResultsList';
import Pagination from '../../components/Pagination/Pagination';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const SearchResultsPage = () => {
  const classes = useStyles();
  const query = new URLSearchParams(useLocation().search).get('query');
  const { movies, page, setPage, loading, error, setLoading } =
    useSearchMovies(query);

  if (error.isError) {
    return (
      <Container className={classes.root}>
        <Box>
          <Typography variant='h6'>
            {' '}
            {`Oops.. Something Whent wrong.. `}{' '}
          </Typography>
          <Link to='/'>
            <Typography color='primary'>
              Please go to the main page..
            </Typography>
          </Link>
        </Box>
      </Container>
    );
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <ResultsStats
            title={`Search Results`}
            total_results={movies && movies.total_results}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <SearchResultsList
            results={movies && movies.results}
            query={query}
            loading={loading}
          />
          {movies.results.length ? (
            <Pagination
              total_pages={movies.total_pages || 1}
              page={page}
              setPage={setPage}
              setLoading={setLoading}
            />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchResultsPage;
