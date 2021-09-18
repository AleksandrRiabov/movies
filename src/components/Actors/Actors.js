import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useStyles } from './styles';
import { useApiContext } from '../../apiContext';
import { Link } from 'react-router-dom';
import HorizontalListing from '../HorizontalListing/HorizontalListing';

const Actors = () => {
	const { credits } = useApiContext();
	const classes = useStyles();

	if (!credits.cast) {
		return null;
	}
	const actors = credits.cast.slice(0, 9);

	return (
		<>
			<HorizontalListing title="Top Billed Cast">
					{actors.map((actor) => {
						const { name, character, profile_path, id } = actor;
						const personImage = profile_path
							? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
							: 'https://via.placeholder.com/138x175';
						return (
							<a key={id} href={"/" + id} style={{ display: 'flex', marginLeft: '-10px' }}>
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
							</a>
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
										View More{' '}
										<ArrowRightAltIcon className={classes.arrowRight} />
									</Typography>
								</Box>
							</Box>
						</Link>
					)}
			</HorizontalListing>
			<a href="#">
				<Typography className={classes.link} variant="h6">
					Full Cast & Crew
				</Typography>
			</a>
		</>
	);
};

export default Actors;