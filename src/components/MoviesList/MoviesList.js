import React from 'react';
import { useMoviesContext } from '../../context/moviesContext';
import MovieCard from '../MovieCard/MovieCard';
import Grid from '@material-ui/core/Grid';
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
		<Grid container spacing={1}>
			{moviesArray.map((movie, index) => {
				return (
					<Grid key={movie.id || index} item xs={6} sm={4} lg={3}>
						<MovieCard data={movie} loading={loading} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default MoviesList;