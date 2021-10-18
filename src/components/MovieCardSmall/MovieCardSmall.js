import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	card: {
		marginRight: '15px',
	},
	cardImage: {
		width: '250px',
		height: '141px',
		borderRadius: '10px',
		overflow: 'hidden',
		background: "#000"
	},
	cardText: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	rating: {
		display: 'flex',
	},
}));

export default function MovieCardSmall({
	movie: { id, backdrop_path, poster_path, title, vote_average },
}) {
	const classes = useStyles();

	const img = backdrop_path || poster_path
			? `https://image.tmdb.org/t/p/w250_and_h141_face/${backdrop_path || poster_path}`
			: 'https://via.placeholder.com/250x141';
	
	return (
		<Link to={`/movie/${id}`} style={{ display: 'flex' }}>
			<Box className={classes.card}>
				<Box className={classes.cardImage}>
					<img
						src={img}
						alt={""}
					/>
				</Box>
				<Box className={classes.cardText}>
					<Typography className={classes.name} variant="subtitle1">
						{title}
					</Typography>
					<Box className={classes.rating}>
						<StarRateIcon /> {vote_average.toFixed(1)}
					</Box>
				</Box>
			</Box>
		</Link>
	);
}