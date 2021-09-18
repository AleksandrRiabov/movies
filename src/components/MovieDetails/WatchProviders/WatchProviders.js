import React, {  useEffect } from 'react';
import {useParams} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';
import {useApiContext} from "../../../apiContext";

const WatchProviders = ({ movieId }) => {
	const {id} = useParams();
	const {providers, getProviders} = useApiContext();
	const classes = useStyles();

	useEffect(() => {
		getProviders(id);
	}, []);

	if (!providers) {
		return null;
	}
	return (
		<Box>
			{providers.flatrate && (
				<Box className={classes.providersBox}>
					<Typography className={classes.providersTitle}>Streaming :</Typography>
					{providers.flatrate.map((provider) => {
						return (
							<Box key={provider.logo_path} className={classes.providerLogo}>
								<img
									width="100%"
									src={`https://image.tmdb.org/t/p/w45/${provider.logo_path}`}
									alt={provider.name}
								/>
							</Box>
						);
					})}
				</Box>
			)}
			{providers.buy && (
				<Box className={classes.providersBox}>
					<Typography className={classes.providersTitle}>Buy :</Typography>
					{providers.buy.map((provider) => {
						return (
							<Box key={provider.logo_path} className={classes.providerLogo}>
								<img
									width="100%"
									src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`}
									alt={provider.name}
								/>
							</Box>
						);
					})}
				</Box>
			)}
		</Box>
	);
};

export default WatchProviders;