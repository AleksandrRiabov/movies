import React, { useState } from 'react';
import { useStyles } from './styles';
import Spiner from '../../../../components/Spiner/Spiner';
import Box from '@material-ui/core/Box';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';


const TrailerPreview = ({ id, setShowModal, name }) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Spiner color="#000" />
			<Box
				className={classes.imgWrapper}
				onClick={() => setShowModal({show: true, id, name: name})}
				style={{
					backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
					boxSizing: 'border-box',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<PlayCircleFilledWhiteIcon className={classes.playIcon} />
			</Box>
		</Box>
	);
};

export default TrailerPreview;