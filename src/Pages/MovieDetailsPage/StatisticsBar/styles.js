import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
	  width: "260px",
	  background: "#fff",
	  paddingTop: "30px",
  },
	fact: {
		margin: "30px 0"
	},
	loadingWrapper: {
		 position: "relative",
		width: "260px",
		height: "300px"
	}
}));