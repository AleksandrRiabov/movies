import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import HorizontalListing from "../HorizontalListing/HorizontalListing";
import Spiner from "../Spiner/Spiner";
import { useApiContext } from "../../apiContext";
import {Link} from "react-router-dom";


const RecomendetMovies = () => {
	const classes = useStyles();
	const {recommended, getRecommended} = useApiContext();
	const {id} = useParams();
	
	useEffect(() => {
		getRecommended(id);
	}, [id]);
	
	console.log(recommended)
	if (!recommended.results){
		return <Spiner />
	}
	
	
	return (
		<HorizontalListing title="Recommendations">
		   { recommended.results.map(movie => {
				const {backdrop_path, title, id, vote_average} = movie;
				return (
					<Link key={backdrop_path} to={`/details/${id}`} style={{ display: 'flex' }}>
								<Box className={classes.card}>
									<Box className={classes.cardImage}>
										<img src={`https://image.tmdb.org/t/p/w250_and_h141_face/${backdrop_path}`} alt={title} />
									</Box>
									<Box className={classes.cardText}>
										<Typography className={classes.name} variant="subtitle1">
											{title}
										</Typography>
								         <Box className={classes.rating}><StarRateIcon /> {vote_average.toFixed(1)}</Box>
									</Box>
								</Box>
							</Link>
				)
			})}
		</HorizontalListing>
	)
}

export default React.memo(RecomendetMovies);