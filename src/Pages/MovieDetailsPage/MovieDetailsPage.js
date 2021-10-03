import React from 'react';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import StatisticsBar from './StatisticsBar/StatisticsBar';
import RecomendetMovies from './RecomendetMovies/RecomendetMovies';
import ReviewsSection from './ReviewsSection/ReviewsSection';
import MovieTrailer from './MovieTrailer/MovieTrailer';

console.log('Details page');

const MovieDetailsPage = () => {
	const classes = useStyles();

	return (
		<Box>
			<MovieDetails />
			<Box className={classes.whiteSection}>
				<Container className={classes.witeSectionWrapper}>
					<Box className={classes.leftColumn}>
						<Cast />
						<hr />
						<ReviewsSection />
						<MovieTrailer />
						<RecomendetMovies />
					</Box>
					<StatisticsBar />
				</Container>
			</Box>
		</Box>
	);
};

export default MovieDetailsPage;