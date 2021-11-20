import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  social: {
    marginTop: '30px',
  },
  personalInfo: {
    marginTop: '25px',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  detail: {
    padding: '15px 0',
    width: '33%',
    minWidth: '200px',
  },
  bold: {
    fontWeight: '600',
  },
}));
