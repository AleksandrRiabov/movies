import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Spiner from '../Spiner/Spiner';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useMoviesContext } from '../../context/moviesContext';
import PaginationBar from '../Pagination/Pagination';

const MoviesList = () => {
	const { movies, loading, error } = useMoviesContext();
	const [page, setPage] = React.useState(1);
	
	if (loading){
		return (
		   <Box style={{position: "relative", width: "100%", height: "200px"}}>
			 <Spiner />
			</Box>
		)
	}
	
	if (error.isError){
		return (
		   <Box>
			 <Typography variant="h6">{error.message}</Typography>
			</Box>
		)
	}
	
	return (
		<Grid  container spacing={1}>
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