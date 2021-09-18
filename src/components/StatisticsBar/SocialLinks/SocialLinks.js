import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useApiContext } from '../../../apiContext';

const useStyles = makeStyles((theme) => ({
	iconsWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	link: {
		color: "#000",
		"&:hover": {
			color: "grey"
		}
	}
}));

const SocialLinks = () => {
	const classes = useStyles();
	const { details, getSocialIds, socialIds } = useApiContext();
	
	useEffect(() => {
			getSocialIds(details.id);
	}, []);
	
	
	return (
		<Box className={classes.iconsWrapper}>
			{socialIds["facebook_id"] && <a href={`https://www.facebook.com/${socialIds["facebook_id"]}`} target="_blank" rel="noopener noreferrer">
				<Box>
					<FacebookIcon className={classes.link} fontSize="large" />
				</Box>
			</a>}
			{socialIds["instagram_id"] && <a href={`https://www.instagram.com/${socialIds["instagram_id"]}`} target="_blank"rel="noopener noreferrer">
				<Box>
					<InstagramIcon className={classes.link}  fontSize="large" />
				</Box>
			</a>}
			{socialIds["twitter_id"] && <a href={`https://www.twitter.com/${socialIds["twitter_id"]}`} target="_blank"rel="noopener noreferrer">
				<Box>
					<TwitterIcon className={classes.link} fontSize="large" />
				</Box>
			</a>}
			{details.homepage && <a href={details.homepage} target="_blank"rel="noopener noreferrer">
				<Box>
					<LinkIcon className={classes.link} fontSize="large" />
				</Box>
			</a>}
		</Box>
	);
};

export default SocialLinks;