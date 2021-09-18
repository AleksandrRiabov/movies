import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useApiContext } from '../../apiContext';
import PaginationBar from '../Pagination/Pagination';

const MoviesList = () => {
	const { movies } = useApiContext();
	const [page, setPage] = React.useState(1);
	return (
		<Grid container spacing={1}>
			<Box
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '20px',
				}}
			>
				<PaginationBar
					page={movies.page || 1}
					setPage={setPage}
					totalPages={movies.total_pages}
				/>
			</Box>
			{!movies.results.length && <h1> No Results...</h1>}

			{movies.results.map((movie, index) => {
				return (
					<Grid key={movie.id || index} item xs={6} sm={4} lg={3}>
						<MovieCard data={movie} />
					</Grid>
				);
			})}
			<Box
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					marginTop: '20px',
				}}
			>
				<PaginationBar
					page={movies.page || 1}
					setPage={setPage}
					totalPages={movies.total_pages}
				/>
			</Box>
		</Grid>
	);
};

export default MoviesList;