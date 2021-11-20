import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  skeleton: {
    width: '100%',
    display: 'flex',
    marginBottom: '15px',
  },
  skeletonText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    padding: '0 15px ',
  },
  message: {
    width: '100%',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  link: {
    fontSize: '14px',
    marginTop: '20px',
  },
}));
