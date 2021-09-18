import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	card: {
		marginRight: "15px",
	},
	cardImage: {
		height: "141px",
		borderRadius: "10px",
		overflow: "hidden",
	},
	cardText:{
		display: "flex",
		justifyContent: "space-between",
	},
	rating: {
		display: "flex",
	}
}));