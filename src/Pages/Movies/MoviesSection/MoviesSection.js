import React from 'react';
import { useMoviesContext } from '../../../context/moviesContext';
import Box from '@material-ui/core/Box';
import Pagination from '../../../components/Pagination/Pagination';
import MoviesList from './MoviesList/MoviesList';

const MoviesSection = () => {
	const {
		setPage,
		movies: { total_pages, page },
	} = useMoviesContext();

	return (
		<Box>
			<MoviesList />
			<Pagination page={page || 1} setPage={setPage} total_pages={total_pages} />
		</Box>
	);
};

export default MoviesSection;