import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import img_placeholder_W_300x450 from '../../../images/large/img_placeholder_W_300x450.jpg';
import img_placeholder_M_300x450 from '../../../images/large/img_placeholder_M_300x450.jpg';
import img_placeholder_NS_300x450 from '../../../images/large/img_placeholder_NS_300x450.png';

const useStyles = makeStyles((theme) => ({
	imageWrapper: {
		width: '300px',
		height: '450px',
		borderRadius: '15px',
		overflow: 'hidden',
	},
}));

const PersonPhoto = ({ path, alt, gender }) => {
	const classes = useStyles();

	const placeholders = [
		img_placeholder_NS_300x450,
		img_placeholder_W_300x450,
		img_placeholder_M_300x450,
	];

	const imgLink = path ? `https://image.tmdb.org/t/p/w300/${path}` : placeholders[gender];
	return (
		<Box className={classes.imageWrapper}>
			<img src={imgLink} alt={alt} />
		</Box>
	);
};

export default PersonPhoto;