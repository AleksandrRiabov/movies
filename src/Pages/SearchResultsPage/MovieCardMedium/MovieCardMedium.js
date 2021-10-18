import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const MovieCardMedium = ({ movie: { id, title, overview, release_date, poster_path } }) => {
	const classes = useStyles();
	const imgUrl = `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${poster_path}`;
	return (
		<Paper key={id} className={classes.card}>
			<Link to={`/movie/${id}`}>
				<Box>
					<Box className={classes.imageWrapper}>
						<img src={imgUrl} alt="" />
					</Box>
				</Box>
			</Link>
			<Box className={classes.content}>
				<Box>
					<Link to={`/movie/${id}`}>
						<Typography variant="h6">{title}</Typography>
					</Link>
					<Typography variant="subtitle1" className={classes.releaseDate}>
						{release_date}
					</Typography>
				</Box>
				<Typography className={classes.overview} variant="subtitle2">
					{overview}
				</Typography>
			</Box>
		</Paper>
	);
};

export default MovieCardMedium;