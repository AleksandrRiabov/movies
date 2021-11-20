import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '97%',
    marginTop: '50px',
    background: 'transparent',
    padding: '0 1%',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mobile: {
    position: 'absolute',
    top: '-100%',
    left: 0,
    right: 0,
    background: '#01121d',
    transition: '1s all ease',
  },
  close: {
    color: '#fff',
    fontWeight: '500',
    padding: '10px',
    background: '#bd0a57',
    marginBottom: '-40px',
    textAlign: 'center',
  },
  addFiltersBtn: {
    width: '50%',
    minWidth: '150px',
    maxWidth: '270px',
    color: '#fff',
    fontWeight: '500',
    padding: '10px',
    background: '#bd0a57',
    marginBottom: '-40px',
    textAlign: 'center',
    transition: '1s all ease',
  },
  btnText: {
    letterSpacing: '2px',
  },
}));
