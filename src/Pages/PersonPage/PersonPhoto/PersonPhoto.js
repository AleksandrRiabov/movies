import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import img_placeholder_W_300x450 from '../../../images/large/img_placeholder_W_300x450.jpg';
import img_placeholder_M_300x450 from '../../../images/large/img_placeholder_M_300x450.jpg';
import img_placeholder_NS_300x450 from '../../../images/large/img_placeholder_NS_300x450.png';

const useStyles = makeStyles((theme) => ({
	imageWrapper: {
		[theme.breakpoints.up('md')]: {
			width: '300px',
			height: '450px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '60%',
			margin: '0 auto',
		},
	},
}));

const PersonPhoto = ({ path, alt, gender }) => {
	const classes = useStyles();
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const placeholders = [
		img_placeholder_NS_300x450,
		img_placeholder_W_300x450,
		img_placeholder_M_300x450,
	];

	const imgLink = path ? `https://image.tmdb.org/t/p/w300/${path}` : placeholders[gender];

	const imgMobile = path
		? `https://www.themoviedb.org/t/p/w375_and_h375_face${path}`
		: placeholders[gender];
	return (
		<Box className={classes.imageWrapper}>
			<img
				src={isSmallScreen ? imgMobile : imgLink}
				style={{ width: '100%', borderRadius: '15px' }}
				alt={alt}
			/>
		</Box>
	);
};

export default PersonPhoto;