import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  providersBox: {
    width: '100%',
    display: 'flex',
    paddingBottom: '15px',
  },
  logosWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  providerLogo: {
    width: '45px',
    marginLeft: '15px',
    borderRadius: '10px',
    overflow: 'hidden',
    height: '45px',
    marginBottom: '10px',
  },
  providersTitle: {
    dispaly: 'block',
    width: '85px',
  },
}));
