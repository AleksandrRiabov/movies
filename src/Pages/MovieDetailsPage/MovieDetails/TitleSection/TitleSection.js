import React from 'react';
import { useMovieDetailsContext } from '../../../../context/movieDetailsContext';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';
import MovieRating from '../../../../components/MovieRating/MovieRating';
import Spiner from '../../../../components/Spiner/Spiner';

const TityleSection = () => {
	const {
		details: { genres, release_date, title, vote_average, production_countries, runtime },
	} = useMovieDetailsContext();
	const classes = useStyles();

	if (!title) {
		return (
			<Box className={classes.title}>
				<Spiner />
			</Box>
		);
	}

	const runTime = countRuntime(runtime);
	const countries = production_countries.map((country) => country.iso_3166_1).join(', ');

	return (
		<Box className={classes.title}>
			<Typography variant="h2">{title}</Typography>
			<Box className={classes.facts}>
				<span>{release_date}</span>
				<span>{countries && ` (${countries}) -`}</span>
				{genres &&
					genres.map(({ name }, index) => {
						return (
							<span key={name}>
								{index !== genres.length - 1 ? ` ${name},` : ` ${name}`}
							</span>
						);
					})}
				<span>{runTime}</span>
			</Box>
			<Box>
				<MovieRating rating={vote_average} />
			</Box>
		</Box>
	);
};

export default TityleSection;

function countRuntime(runtime) {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime - hours * 60;

	return hours > 0 ? ` - ${hours}h ${minutes}m` : `${minutes}m`;
}