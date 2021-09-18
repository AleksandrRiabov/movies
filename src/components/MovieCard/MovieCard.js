import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import MovieRating from '../MovieRating/MovieRating';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		background: '#1c1f35',
		color: '#fff',
	},
	textSecondary: {
		color: '#dedede',
	},
	star: {
		color: 'gold',
	},
	mobRatingWrapper: {
		display: 'flex',
	},
	titleWrapper: {
		height: '40px',
		overflow: 'hidden',
	},
});

export default function MovieCard({ data }) {
	const classes = useStyles();

	const imgUrl = data.poster_path
		? `https://image.tmdb.org/t/p/w500${data.poster_path}`
		: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png';

	return (
		<Link to={`/details/${data.id}`}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						className={classes.media}
						image={imgUrl}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Hidden only={['md', 'lg', 'xl']}>
							<Box className={classes.mobRatingWrapper}>
								<StarRateIcon className={classes.star} />{' '}
								<Typography color="secondary" className={classes.rating}>
									Rating: {data.vote_average}
								</Typography>
							</Box>
						</Hidden>
						<Box className={classes.titleWrapper}>
							<Typography gutterBottom variant="subtitle2" component="h2">
								{data.original_title}
							</Typography>
						</Box>

						<Hidden only={['xs', 'sm']}>
							<MovieRating rating={data.vote_average} />
						</Hidden>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
}