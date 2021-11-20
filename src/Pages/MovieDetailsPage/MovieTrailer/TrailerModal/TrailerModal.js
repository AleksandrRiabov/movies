import React from 'react';
import { useStyles } from './styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Spiner from '../../../../components/Spiner/Spiner';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const TrailerModal = ({ id, title, setShowModal }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const width = window.screen.width - 40;
  const height = (width / 100) * 56.25;

  const handleClose = (e) => {
    if (
      e.target.id === 'trailerModalOuter' ||
      e.target.closest('#closeModalIcon')
    ) {
      setShowModal({ show: false, id: '', name: '' });
    }
  };

  return (
    <Box
      id='trailerModalOuter'
      onClick={(e) => handleClose(e)}
      className={classes.root}
    >
      <Box className={classes.content}>
        <Box className={classes.title}>
          <Typography variant='h6'>{title}</Typography>
          <CloseIcon id='closeModalIcon' className={classes.close} />
        </Box>
        <Spiner />
        <Box className={classes.video}>
          <iframe
            width={isSmallScreen ? `${width}px` : '560'}
            height={isSmallScreen ? `${height}px` : '315'}
            src={`https://www.youtube.com/embed/${id}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default TrailerModal;