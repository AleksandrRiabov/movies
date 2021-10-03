import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HorizontalListing from '../../../components/HorizontalListing/HorizontalListing';
import MovieCardSmall from '../../../components/MovieCardSmall/MovieCardSmall';

const useStyles = makeStyles((theme) => ({
	biography: {
		paddingTop: '30px',
	},
}));

const HeaderRight = ({ name, biography, movie_credits }) => {
	const classes = useStyles();

	return (
		<>
			<Box>
				<Typography variant="h4">{name}</Typography>
				<Box className={classes.biography}>
					<Typography variant="h6" gutterBottom>
						Biography
					</Typography>
					<Typography variant="body1">
						{biography || `We don't have a biography for ${name}.`}
					</Typography>
				</Box>
			</Box>
			<Box className={classes.movies}>
				<HorizontalListing title={'Known For'}>
					{movie_credits
						? movie_credits.map((movie) => {
								return <MovieCardSmall key={movie.id} movie={movie} />;
						  })
						: null}
				</HorizontalListing>
			</Box>
		</>
	);
};

export default HeaderRight;