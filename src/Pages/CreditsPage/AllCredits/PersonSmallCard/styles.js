import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 30px',
  },
  imgWrapper: {
    width: '66px',
    height: '66px',
    background: '#ddd',
    borderRadius: '5px',
    overflow: 'hidden',
    marginRight: '30px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0px',
  },
  name: {
    fontWeight: '700',
  },
}));
