import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: '#fff',
    background: '#000',
  },
  footerInner: {
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
