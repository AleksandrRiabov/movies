import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Actors from "../../components/Actors/Actors";

const useStyles = makeStyles((theme) => ({
	 actors: {
	   width: "calc(100vw - 80px - 268px)",
	   maxWidth: "900px"
   },
	whiteSection: {
		display: "flex",
	   background: "#fff",
	   marginBottom: "500px"
	}
}));


const MovieDetailsPage = () => {
	const classes = useStyles();
	
	return (
	    <div>
			<MovieDetails />
				<Box className={classes.whiteSection}>
					<Container>
					   <Box className={classes.actors} >
					   		<Actors />
						</Box>
					</Container>
				</Box>
		</div>
	)
}

export default MovieDetailsPage;