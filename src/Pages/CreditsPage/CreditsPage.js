import React from 'react';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import { useParams } from 'react-router-dom';
import AllCredits from "./AllCredits/AllCredits";
import MovieHeaderSmall from '../../components/MovieHeaderSmall/MovieHeaderSmall';
import Spiner from '../../components/Spiner/Spiner';
import Box from '@material-ui/core/Box';
import {useStyles } from './styles';



const CreditsPage = () => {
	const { id } = useParams();
	const classes = useStyles();
	const { data, loading, error } = useFetchDetails({ id, extra: ['credits'] });

	if (loading) {
		return (
			<Box>
				{' '}
				<Spiner />
			</Box>
		);
	}

	if (error.isError) {
		return <Box>{error.message}</Box>;
	}
	console.log(data);
	return (
		<Box className={classes.creditsPage}>
			<MovieHeaderSmall movie={data} />
			<AllCredits data={data.credits}/>
		</Box>
	);
};

export default CreditsPage;