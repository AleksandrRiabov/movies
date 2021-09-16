import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Spiner from "../../Spiner/Spiner";
import {API_URL, API_KEY_3} from "../../../api/api"
import { useStyles } from '../styles';

const WatchProviders = ({movieId}) => {
	const [providers, setProviders] = useState([]);
	const [loading, setLoading] = useState(true);
	const classes = useStyles();
	
	useEffect(() => {
		const url = `${API_URL}/movie/${movieId}/watch/providers?api_key=${API_KEY_3}`;
		const getProviders = async() => {
			try{
				setLoading(true);
				const response = await fetch(url);
				const data = await response.json();
				setProviders(data.results.GB);
			} catch(error){
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		getProviders();
	}, [movieId]);
	
	if (!providers){
		return null
	}
	return (
	   <Box>
			{providers.flatrate && <Box className={classes.providersBox}>
				<Typography className={classes.providersTitle} >Streaming :</Typography>
			{ providers.flatrate.map(provider => {
				return	(
					<Box key={provider.logo_path} className={classes.providerLogo}>
						<img width="100%" src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`}/>
					</Box>)
				})}
			</Box>}
			{ providers.buy && <Box className={classes.providersBox}>
				<Typography className={classes.providersTitle} >Buy :</Typography>
				{providers.buy.map(provider => {
				return	(
					<Box key={provider.logo_path} className={classes.providerLogo}>
						<img width="100%" src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`}/>
					</Box>)
				})}
			</Box>}
		</Box>
	)
}

export default WatchProviders;