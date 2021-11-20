import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconsWrapper: {
    width: '100%',
    display: 'flex',
    marginLeft: '-10px',
  },
  link: {
    color: '#000',
    '&:hover': {
      color: 'grey',
    },
    padding: '0 10px',
  },
}));
