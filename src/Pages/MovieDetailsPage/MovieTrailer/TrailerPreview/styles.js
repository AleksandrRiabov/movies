import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  video: {
    position: 'relative',
    zIndex: '10',
  },
  imgWrapper: {
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      height: '141px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '533px',
      height: '300px',
    },
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
    position: 'relative',
  },
  playCircle: {
    width: '67px',
    height: '67px',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#fff',
    fontSize: '35px',
    cursor: 'pointer',
    opacity: '0.9',
  },
}));