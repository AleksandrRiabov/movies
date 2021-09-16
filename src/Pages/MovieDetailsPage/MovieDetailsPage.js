import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Actors from "../../components/Actors/Actors";
import StatisticsBar from "../../components/StatisticsBar/StatisticsBar";

const useStyles = makeStyles((theme) => ({
	
	whiteSection: {
	  display: "flex",
	   background: "#fff",
	   marginBottom: "500px",
		
	},
	 leftColumn: {
	   width: "calc(100vw - 80px - 268px)",
	   maxWidth: "900px",
	   position: "relative",
	   paddingRight: "60px"
   },
	witeSectionWrapper: {
		display: "flex"
	},
	rightSideColorTransition: {
		width: "150px",
		height: "100%",
		position: "absolute",
		top: 0,
		right: 0,
		background: "linear-gradient(270deg, rgba(255,255,255,1) 55%, rgba(0,0,0,0) 90%)"
	}
}));


const MovieDetailsPage = () => {
	const classes = useStyles();
	
	return (
	    <div>
			<MovieDetails />
				<Box className={classes.whiteSection}>
					<Container className={classes.witeSectionWrapper}>
					   <Box className={classes.leftColumn} >
					   		<Actors />
						   <Box className={classes.rightSideColorTransition}></Box>
						</Box>
						<StatisticsBar />
					</Container>
				</Box>
		</div>
	)
}

export default MovieDetailsPage;