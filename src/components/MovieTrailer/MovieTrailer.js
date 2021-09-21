import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getMovieDetail } from '../../services';
import Spiner from '../Spiner/Spiner';
import HorizontalListing from '../HorizontalListing/HorizontalListing';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: "15px"
	},
}));

const MovieTrailer = () => {
	const [video, setVideo] = useState('');
	const { id } = useParams();
	const classes = useStyles();

	useEffect(() => {
		const fetchVideoKey = async () => {
			try {
				const data = await getMovieDetail({ id, query: 'videos' });
				setVideo(data.results);
			} catch (err) {
				console.log(err);
			}
		};
		fetchVideoKey();
	}, [id]);

	if (!video.length) {
		return null;
	}

	return (
		<>
		<HorizontalListing title="Videos">
			{video.map((trailer) => {
				return(
						<Box className={classes.root}>
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
				)
			})}
		</HorizontalListing>
		<hr/>
		</>
	);
};

export default MovieTrailer;