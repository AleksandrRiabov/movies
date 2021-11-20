import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: '100',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    background: '#000',
  },
  title: {
    background: '#000',
    color: '#fff',
    padding: '20px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      width: '540px',
    },
  },
  video: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: '101',
  },
  close: {
    cursor: 'pointer',
    opacity: '0.7',
    padding: '3px',
    '&:hover': {
      opacity: '1',
    },
  },
}));