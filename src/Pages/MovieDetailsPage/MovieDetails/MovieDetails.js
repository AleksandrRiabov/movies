import React, { useEffect } from 'react';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import TitleSection from './TitleSection/TitleSection';
import Spiner from '../../../components/Spiner/Spiner';
import WatchProviders from './WatchProviders/WatchProviders';
import TopCrew from './TopCrew/TopCrew';

const MovieDetails = () => {
	const classes = useStyles();
	const { id } = useParams();
	const { getDetails, details, loading, error } = useMovieDetailsContext();

	useEffect(() => {
		if (details.id === parseInt(id)) {
			return;
		} else {
			window.scroll(0, 0);
			getDetails(id);
		}
	}, [id]);

	if (loading) {
		return (
			<Box className={classes.darkBg}>
				{' '}
				<Spiner />
			</Box>
		);
	}

	if (error.isError) {
		return <Box className={classes.darkBg}>{error.message}</Box>;
	}

	const {
		backdrop_path,
		poster_path,
		title,
		vote_average,
		release_date,
		genres,
		tagline,
		overview,
		production_countries,
		runtime,
	} = details;

	const backgroundImage = `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
		backdrop_path || poster_path
	})`;
	const poster = poster_path
		? `https://image.tmdb.org/t/p/w500/${poster_path}`
		: 'https://via.placeholder.com/300x450';

	return (
		<div
			style={{
				width: '100%',
				position: 'realtive',
				backgroundPosition: 'right -200px top',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: backgroundImage,
			}}
		>
			<Box className={classes.darkBg}>
				<Container className={classes.headerInner}>
					<Box>
						<Box className={classes.headerPoster}>
							<img style={{ width: '100%' }} src={poster} alt="alt" />
						</Box>
					</Box>
					<Box className={classes.headerDetails}>
						<TitleSection
							
						/>
						<Box className={classes.tagline}>
							<Typography>{tagline}</Typography>
						</Box>
						<Box>
							<h3>Overview</h3>
						</Box>
						<Box>
							<Typography gutterBottom>{overview}</Typography>
						</Box>
						<TopCrew />
						<WatchProviders />
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default MovieDetails;