import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    marginBottom: '15px',
    height: '141px',
    boredrRadius: '5px',
    border: '1px solid rgba(34, 60, 80, 0.2)',
    overflow: 'hidden',
    boxShadow: '0px 0px 3px 1px rgba(34, 60, 80, 0.2)',
  },
  imageWrapper: {
    width: '94px',
    height: '141px',
    backgroundColor: '#eee',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: '10px 15px',
  },
  releaseDate: {
    color: '#999',
    fontSize: '14px',
  },
  overview: {
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    ' -webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));
