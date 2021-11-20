import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  creatorsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: '20px',
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
