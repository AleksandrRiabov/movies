import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  sectionScroll: {
    display: 'flex',
    overflow: 'hidden',
    overflowX: 'scroll',
    marginBottom: '10px',
    '&::-webkit-scrollbar': {
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 10px rgba(0,0,,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#dbdbdb',
      borderRadius: '20px',
      outline: 'none',
    },
  },
  sectionTitle: {
    margin: '30px 30px 20px  0',
  },
  colorTransition: {
    top: 0,
    right: 0,
    width: '50px',
    height: '100%',
    zIndex: 10,
    position: 'absolute',
    background:
      'linear-gradient(270deg, rgba(255,255,255,1) 15%, rgba(255,255,255,0) 59%)',
    transition: '0.5s ease-in ',
    pointerEvents: 'none',
  },
}));
