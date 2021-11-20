import React from 'react';
import Avatar from '../Avatar/Avatar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import StarIcon from '@material-ui/icons/Star';
import Text from '../../components/Text/Text';

const ReviewCard = ({ review }) => {
  const classes = useStyles();

  if (!review) {
    return null;
  }

  const {
    author_details: { avatar_path, name, username, rating },
    updated_at,
    content,
  } = review;

  return (
    <Paper className={classes.content}>
      <Box className={classes.grouped}>
        <Box className={classes.avatar}>
          <Avatar author={name || username} img={avatar_path} />
        </Box>
        <Box>
          <Box className={classes.flexWrapper}>
            <Typography variant='h6' className={classes.name}>
              A review bay {name || username}{' '}
            </Typography>
            {rating && (
              <Box className={classes.rating}>
                <StarIcon className={classes.star} />
                {rating.toFixed(1)}
              </Box>
            )}
          </Box>
          <Box>
            <Typography variant='body2' className={classes.writtenBy}>
              Written by {name || username} on {updated_at.slice(0, 10)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.teaser}>
        <Text size={600}>{content}</Text>
      </Box>
    </Paper>
  );
};

export default ReviewCard;