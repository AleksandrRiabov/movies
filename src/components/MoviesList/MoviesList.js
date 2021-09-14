import React from "react"
import MovieCard from "../MovieCard/MovieCard"
import Grid from "@material-ui/core/Grid";
import {useApiContext} from "../../apiContext";

const MoviesList = () => {
	
	const {movies} = useApiContext();
	return (
		<Grid container spacing={1}>
			{!movies.length && <h1> No Results...</h1>}
			{ movies.map((movie, index) => {
				return <Grid  key={movie.id || index} item xs={6} sm={4}  lg={3}>
							<MovieCard data={movie} />
				     	</Grid>
			})}
		</Grid>
	)
}

export default MoviesList;