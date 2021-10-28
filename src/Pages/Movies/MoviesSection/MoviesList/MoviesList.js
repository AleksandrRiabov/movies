import React from 'react';
import { useMoviesContext } from '../../../../context/moviesContext';
import MovieCard from './MovieCard/MovieCard';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';

const MoviesList = () => {
	const classes = useStyles();
	const { movies, loading, error } = useMoviesContext();

	if (error.isError) {
		return (
			<Box>
				<Typography variant="h6">{error.message}</Typography>
			</Box>
		);
	}

	const moviesArray = loading ? new Array(20).fill('') : movies.results;

	return (
		<Box className={classes.container}>
			{moviesArray.map((movie, index) => {
				return (
					<Box key={movie.id || index} className={classes.item}>
						<MovieCard data={movie} loading={loading} />
					</Box>
				);
			})}
		</Box>
	);
};

export default MoviesList;