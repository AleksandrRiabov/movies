import React from 'react';
import { useStyles } from './styles';
import Spiner from '../../../../components/Spiner/Spiner';
import Box from '@material-ui/core/Box';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const TrailerPreview = ({ id, setShowModal, name }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Spiner color='#000' />
      <Box
        className={classes.imgWrapper}
        onClick={() => setShowModal({ show: true, id, name: name })}
        style={{
          backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
          boxSizing: 'border-box',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Box className={classes.playCircle}>
          <PlayArrowIcon className={classes.playIcon} />
        </Box>
      </Box>
    </Box>
  );
};

export default TrailerPreview;
