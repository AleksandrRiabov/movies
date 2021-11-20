import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  genresWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    color: '#fff',
    padding: '10px 0px',
  },
  genre: {
    margin: theme.spacing(0.3),
    color: '#eee',
    textTransform: 'capitalize',
    fontSize: '12px',
    padding: '4px 12px',
    border: '1px solid #eeeeee3d',
  },
  slectedGenre: {
    color: '#d29e3e',
  },
  resetBtn: {
    color: '#f58800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    background: '#00000040',
    borderRadius: '5px',
    justifyContent: 'space-around',
    width: '115px',
  },
}));
