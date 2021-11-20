import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '15px 30px',
    },
    minHeight: '90vh',
  },
  department: {
    padding: '15px 0',
    fontWeight: '700',
  },
}));
