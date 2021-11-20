import React from 'react';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';
import { useStyles } from './styles';

const SocialLinks = ({ details: { external_ids, homepage } }) => {
  const classes = useStyles();

  return (
    <Box className={classes.iconsWrapper}>
      {external_ids['facebook_id'] && (
        <a
          href={`https://www.facebook.com/${external_ids['facebook_id']}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Box>
            <FacebookIcon className={classes.link} fontSize='large' />
          </Box>
        </a>
      )}
      {external_ids['instagram_id'] && (
        <a
          href={`https://www.instagram.com/${external_ids['instagram_id']}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Box>
            <InstagramIcon className={classes.link} fontSize='large' />
          </Box>
        </a>
      )}
      {external_ids['twitter_id'] && (
        <a
          href={`https://www.twitter.com/${external_ids['twitter_id']}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Box>
            <TwitterIcon className={classes.link} fontSize='large' />
          </Box>
        </a>
      )}
      {homepage && (
        <a href={homepage} target='_blank' rel='noopener noreferrer'>
          <Box>
            <LinkIcon className={classes.link} fontSize='large' />
          </Box>
        </a>
      )}
    </Box>
  );
};

export default SocialLinks;