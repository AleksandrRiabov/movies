import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    minHeight: '100vh',
  },
  container: {
    padding: '30px 10px',
  },
  content: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
  },
  social: {
    marginTop: '15px',
    width: '150px',
    margin: '0 auto',
  },
  titleMobile: {
    textAlign: 'center',
  },
}));
