import React from "react"; 
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const Footer = () => {
	const classes = useStyles();
	
	return (
	 <Box className={classes.root}>
		  <Container>
			  <Box className={classes.footerInner}>
			     <Box>
				  <Typography variant="body2">©2021 WebDevApplications@gmail.com</Typography>
				  </Box>
			  </Box>
			</Container>
	 </Box>
	)
}

export default Footer;