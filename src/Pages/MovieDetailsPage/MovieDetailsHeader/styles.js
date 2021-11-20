import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  darkBg: {
    backgroundImage:
      'linear-gradient(to right, rgba(15.69%, 12.94%, 12.16%, 1.00) 150px, rgba(15.69%, 12.94%, 12.16%, 0.77) 100%)',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minHeight: '500px',
    position: 'relative',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minHeight: '100vh',
    position: 'relative',
  },
  headerInner: {
    width: '100%',
    padding: '30px 40px',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  headerDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'center',
    boxSizing: 'border-box',
    paddingLeft: '40px',
    color: '#fefefe',
  },
  headerPoster: {
    width: '300px',
    height: '450px',
    borderRadius: '15px 15px 0 0',
    overflow: 'hidden',
  },
  title: {
    width: '100%',
    marginBottom: '24px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  facts: {
    width: '100%',
  },
  tagline: {
    width: '100%',
    fontStyle: 'italic',
    opacity: '0.8',
  },
  creatorsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    width: '100%',
  },
  creator: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '33%',
    marginBottom: '15px',
  },
}));
