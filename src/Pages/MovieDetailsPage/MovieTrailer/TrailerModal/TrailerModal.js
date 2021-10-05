import React from 'react';
import { useStyles } from './styles';
import Spiner from '../../../../components/Spiner/Spiner';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const TrailerModal = ({ id, title, setShowModal }) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Box className={classes.content}>
				<Box className={classes.title}>
					<Typography variant="h6">{title}</Typography>
					<CloseIcon className={classes.close } onClick={() => setShowModal({show: false, id: "", name: ""})}/>
				</Box>
				<Spiner />
				<Box className={classes.video}>
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${id}`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</Box>
			</Box>
		</Box>
	);
};

export default TrailerModal;