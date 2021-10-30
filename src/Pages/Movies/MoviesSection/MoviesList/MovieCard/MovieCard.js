import React from 'react';
import { useStyles } from './styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import MovieRating from '../../../../../components/MovieRating/MovieRating';
import StarRateIcon from '@material-ui/icons/StarRate';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom';
import noImage from '../../../../../images/noImage300x450.png';

function MovieCard({ data }) {
	const classes = useStyles();

	const imgUrl = data.poster_path
		? `https://image.tmdb.org/t/p/w500${data.poster_path}`
		: noImage;

	return (
		<Box className={classes.card}>
			{!data ? (
				<>
					<Skeleton
						variant="rect"
						width={'100%'}
						height="0"
						className={classes.skeleton}
					/>
					<Box pt={0.5} className={classes.skeletonFooter}>
						<Skeleton width="60%" />
						<Skeleton />
					</Box>
				</>
			) : (
				<Link to={`/movie/${data.id}`}>
					<Card className={classes.root}>
						<CardActionArea>
							<Box className={classes.imageBox}>
								<CardMedia
									style={{ width: '100%' }}
									component="img"
									className={classes.media}
									image={imgUrl}
								/>
							</Box>
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
		</Box>
	);
}

export default React.memo(MovieCard);