import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('md')]: {
      padding: '0 !important',
    },
  },
  header: {
    width: '100%',
    height: '40vh',
    minHeight: '350px',
    overflow: 'hidden',
    marginBottom: '20px',
    position: 'relative',
  },
  headerInner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerTop: {
    width: '100%',
    flex: '2',
    display: 'flex',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      padding: '35px 20px 0 40px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '20px 20px 0 20px',
    },
  },
  filters: {
    flex: '1',
  },
  subtitle: {
    color: '#7fff00',
    [theme.breakpoints.down('xs')]: {
      fontSize: '28px',
    },
  },
  lastSubtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '28px',
    },
  },
}));