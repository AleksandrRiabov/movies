import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  
	card: {
		width: "138px",
		margin: "10px",
		borderRadius: "10px",
		border: "1px solid #e3e3e3",
		overflow: "hidden",
		boxShadow: "0 2px 8px rgb(0 0 0 / 10%)"
	},
	cardText: {
		padding: "0 10px",
		color: "#000"
	},
	name: {
	    fontWeight: "700",
		display: "flex"
	},
	seeMore:{
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "138px",
		margin: "10px",
		
	},
	link: {
		color: "#000",
		"&:hover": {
			color: "grey"
		}
	}
}));