import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Actors from '../../components/Actors/Actors';
import StatisticsBar from '../../components/StatisticsBar/StatisticsBar';
import RecomendetMovies from '../../components/RecomendetMovies/RecomendetMovies';

const useStyles = makeStyles((theme) => ({
	whiteSection: {
		display: 'flex',
		background: '#fff',
		marginBottom: '500px',
	},
	leftColumn: {
		width: 'calc(100vw - 80px - 268px)',
		maxWidth: '900px',
		position: 'relative',
		paddingRight: '30px',
	},
	witeSectionWrapper: {
		display: 'flex',
	},
	rightSideColorTransition: {
		width: '100px',
		height: '100%',
		position: 'absolute',
		top: 0,
		right: 0,
		background: 'linear-gradient(270deg, rgba(255,255,255,1) 45%, rgba(0,0,0,0) 99%)',
	},
}));

const MovieDetailsPage = () => {
	const classes = useStyles();

	return (
		<div>
			<MovieDetails />
			<Box className={classes.whiteSection}>
				<Container className={classes.witeSectionWrapper}>
					<Box className={classes.leftColumn}>
						<Actors />
						<hr/>
						<Box className={classes.rightSideColorTransition}></Box>
						<RecomendetMovies />
					</Box>
					<StatisticsBar />
				</Container>
			</Box>
		</div>
	);
};

export default MovieDetailsPage;