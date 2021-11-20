import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 10px 15px 0',
    position: 'relative',
    minHeight: '200px',
    zIndex: '1',
  },
  video: {
    zIndex: '10',
  },
}));
