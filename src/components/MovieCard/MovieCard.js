import React, { useRef, useEffect } from 'react';
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
import Skeleton from '@material-ui/lab/Skeleton';
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
	skeletonFooter: {
		height: '73px',
		marginTop: '20px',
	},
});

function MovieCard({ data }) {
	const classes = useStyles();
	const skeleton = useRef(null);
	const picture = useRef(null);

	useEffect(() => {
		if (!data) {
			skeleton.current.style.height = `${(skeleton.current.offsetWidth / 2) * 3}px`;
		} else {
			picture.current.style.height = `${(picture.current.offsetWidth / 2) * 3}px`;
		}
	}, []);

	const imgUrl = data.poster_path
		? `https://image.tmdb.org/t/p/w500${data.poster_path}`
		: 'https://via.placeholder.com/300x450';

	console.log(data ? 'Card PHoto' : 'Skeleteon');

	return (
		<>
			{!data ? (
				<>
					<Skeleton ref={skeleton} variant="rect" width={'100%'} />
					<Box pt={0.5} className={classes.skeletonFooter}>
						<Skeleton width="60%" />
						<Skeleton />
					</Box>
				</>
			) : (
				<Link to={`/movie/${data.id}`}>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								ref={picture}
								style={{ width: '100%' }}
								component="img"
								className={classes.media}
								image={imgUrl}
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
			)}
		</>
	);
}

export default React.memo(MovieCard);