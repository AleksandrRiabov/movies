import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';
import Spiner from '../../../components/Spiner/Spiner';
import HorizontalListing from '../../../components/HorizontalListing/HorizontalListing';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '15px',
		position: 'relative',
		minHeight: '200px',
		zIndex: '1',
	},
	video: {
		zIndex: '10',
	},
}));

const MovieTrailer = () => {
	const classes = useStyles();

	const {
		details: { videos },
		loading,
		error,
	} = useMovieDetailsContext();

	if (loading) {
		return (
			<Box className={classes.root}>
				<Spiner color="#5f5f5f" />
			</Box>
		);
	}

	if (error.isError) {
		return (
			<HorizontalListing title="Videos">
				<Box className={classes.root}>{error.message}</Box>
			</HorizontalListing>
		);
	}

	if (!videos || !videos.results.length) {
		return null;
	}

	const sectionTitle = videos.results.length > 1 ? `Videos (${videos.results.length})` : `Video`;

	return (
		<>
			<HorizontalListing title={sectionTitle}>
				{videos.results.map((trailer) => {
					return (
						<Box key={trailer.key} className={classes.root}>
							<Spiner color={'#5f5f5f'} />
							<Box className={classes.video}>
								<iframe
									width="560"
									height="315"
									src={`https://www.youtube.com/embed/${trailer.key}`}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</Box>
						</Box>
					);
				})}
			</HorizontalListing>
			<hr />
		</>
	);
};

export default MovieTrailer;