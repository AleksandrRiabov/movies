import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    background: '#1b2439',
    borderRadius: '5px 5px 0 0',
    padding: '20px',
    color: '#fff',
  },
  note: {
    padding: '10px 20px',
    border: '1px solid #777c89',
  },
}));
