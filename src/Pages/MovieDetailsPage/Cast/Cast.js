import React from 'react';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';
import Spiner from '../../../components/Spiner/Spiner';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import HorizontalListing from '../../../components/HorizontalListing/HorizontalListing';

const Cast = () => {
	const classes = useStyles();
	const { credits, loading, error } = useMovieDetailsContext();

	if (loading) {
		return (
			<Box className={classes.root}>
				<Spiner color="#5f5f5f" />
			</Box>
		);
	}

	if (error.isError) {
		return (
			<HorizontalListing title="Top Billed Cast">
				<Box className={classes.root}>{error.message}</Box>
			</HorizontalListing>
		);
	}

	const actors = credits.cast.slice(0, 9);
	console.log('Actors');
	return (
		<>
			<HorizontalListing title="Top Billed Cast">
				{!credits.cast.length && <p>We don't have any cast added to this movie.</p>}
				{actors.map((actor) => {
					const { name, character, profile_path, id } = actor;
					const personImage = profile_path
						? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
						: 'https://via.placeholder.com/138x175';
					return (
						<Link
							key={id}
							to={`/person/${id}`}
							style={{ display: 'flex', marginLeft: '-10px' }}
						>
							<Box className={classes.card}>
								<Box>
									<img src={personImage} alt={name} />
								</Box>
								<Box className={classes.cardText}>
									<Typography className={classes.name} variant="subtitle1">
										{name}
									</Typography>
									<Typography className={classes.name} variant="caption">
										{character}
									</Typography>
								</Box>
							</Box>
						</Link>
					);
				})}
				{credits.cast.length > 9 && (
					<Link
						to="/allActors"
						style={{
							display: 'flex',
							marginLeft: '-10px',
							paddingRight: '50px',
						}}
					>
						<Box className={classes.seeMore}>
							<Box className={classes.cardText}>
								<Typography className={classes.name} variant="subtitle1">
									View More <ArrowRightAltIcon className={classes.arrowRight} />
								</Typography>
							</Box>
						</Box>
					</Link>
				)}
			</HorizontalListing>
			<a href="/">
				<Typography className={classes.link} variant="h6">
					{credits.cast.length ? 'Full Cast & Crew' : ''}
				</Typography>
			</a>
		</>
	);
};

export default Cast;