import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    padding: '20px',
    borderRadius: '10px',
    background: '#fefefe',
    boxShadow: '0 2px 8px rgb(0 0 0 / 10%)',
    border: '1px solid #dedede',
    marginBottom: '25px',
    maxWidth: '100%',
  },
  grouped: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '20px',
  },
  teaser: {
    [theme.breakpoints.up('sm')]: {
      padding: '20px 0 0 90px',
    },
    fontSize: '1em',
  },
  flexWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  name: {
    paddingRight: '5px',
  },
  rating: {
    height: '24px',
    background: '#000',
    borderRadius: '10px',
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    color: '#fff',
  },
  star: {
    fontSize: '12px',
    color: '#fff',
    margin: '3px',
  },
  writtenBy: {
    fontSize: '0.8rem',
  },
}));