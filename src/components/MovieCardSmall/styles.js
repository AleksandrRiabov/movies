import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    marginRight: '15px',
  },
  cardImage: {
    width: '250px',
    height: '141px',
    borderRadius: '10px',
    overflow: 'hidden',
    background: '#000',
  },
  cardText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rating: {
    display: 'flex',
  },
}));
