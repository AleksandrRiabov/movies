import React from "react";
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles } from '@material-ui/core/styles';
import {useApiContext} from "../../../apiContext";

const useStyles = makeStyles((theme) => ({
     iconsWrapper: {
		 width: "100%",
		 display: "flex",
		 justifyContent: "space-between"
	 },
	
}));

const SocialLinks = () => {
	const classes = useStyles();
	const {details} = useApiContext();
	return (
	   <Box className={classes.iconsWrapper}>
		    <a ><Box><FacebookIcon fontSize="large"/></Box></a>
			<a><Box> <InstagramIcon fontSize="large"/></Box></a>
			<a><Box><TwitterIcon fontSize="large"/></Box></a>
			<a href={details.homepage} target="_blank"><Box><LinkIcon fontSize="large"/></Box></a>
		</Box>
	)
}

export default SocialLinks;