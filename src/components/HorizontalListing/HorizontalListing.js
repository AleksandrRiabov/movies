import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const HorizontalListing = ({children, title}) => {
	const classes = useStyles();
	return (
		<Box>
			<Box className={classes.sectionTitle}>
				<Typography variant={'h5'}>{ title }</Typography>
			</Box>
			<Box className={classes.sectionScroll}>
			{children}
			</Box>
		</Box>
	)
}

export default HorizontalListing;