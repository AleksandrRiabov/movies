import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useStyles } from './styles';
import HorizontalListing from "../HorizontalListing/HorizontalListing";
import { useApiContext } from "../../apiContext";

const RecomendetMovies = () => {
	const {recomendet, getRecomendet} = useApiContext();
	const {id} = useParams();
	
	useEffect(() => {
		getRecomendet(id);
	}, [id]);
	
	console.log(recomendet)
	return (
		<HorizontalListing title="Recomendet">
		
		</HorizontalListing>
	)
}

export default React.memo(RecomendetMovies);