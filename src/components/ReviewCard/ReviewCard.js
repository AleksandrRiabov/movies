import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import StarIcon from '@material-ui/icons/Star';

const ReviewCard = ({ review }) => {
	const classes = useStyles();
	const [showMore, setShowMore] = useState(false);

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
			<Box className={classes.groupped}>
				<Box className={classes.avatar}>
					<Avatar author={name || username} img={avatar_path} />
				</Box>
				<Box>
					<Box className={classes.flexWrapper}>
						<Typography variant="h6">A review bay {name || username} </Typography>
						{rating && (
							<Box className={classes.rating}>
								<StarIcon className={classes.star} />
								{rating.toFixed(1)}
							</Box>
						)}
					</Box>
					<Box>
						<Typography variant="body2">
							Written by {name || username} on {updated_at.slice(0, 10)}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box className={classes.teaser}>
				{content.length > 600 && !showMore ? (
					<p>
						{content.slice(0, 600)}...{' '}
						<span
							style={{ textDecoration: 'underline', cursor: 'pointer' }}
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? '' : 'Show more.'}
						</span>
					</p>
				) : (
					<p>
						{content}{' '}
						<span
							style={{ textDecoration: 'underline', cursor: 'pointer' }}
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? 'Show less.' : ''}
						</span>
					</p>
				)}
			</Box>
		</Paper>
	);
};

export default ReviewCard;