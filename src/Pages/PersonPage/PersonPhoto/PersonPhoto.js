import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	imageWrapper: {
		width: '300px',
		height: '450px',
		borderRadius: '15px',
		overflow: 'hidden',
	},
}));

const PersonPhoto = ({ path, alt }) => {
	const classes = useStyles();

	const imgLink = path
		? `https://image.tmdb.org/t/p/w300/${path}`
		: 'https://via.placeholder.com/300x450';
	return (
		<Box className={classes.imageWrapper}>
			<img src={imgLink} alt={alt} />
		</Box>
	);
};

export default PersonPhoto;