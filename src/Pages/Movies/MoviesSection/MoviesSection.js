import React from 'react';
import { useMoviesContext } from '../../../context/moviesContext';
import Box from '@material-ui/core/Box';
import Pagination from '../../../components/Pagination/Pagination';
import MoviesList from '../../../components/MoviesList/MoviesList';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
	 
	},
}));

const MoviesSection = () => {
	const classes = useStyles();
	const {
		setPage,
		movies: { total_pages, page },
	} = useMoviesContext();

	return (
		<Box className={classes.root}>
			<MoviesList />
			<Pagination page={page || 1} setPage={setPage} total_pages={total_pages} />
		</Box>
	);
};

export default MoviesSection;