import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative"
	},
	video: {
		position: "relative",
		zIndex: "10"
	},
	imgWrapper: {
		width: "533px",
		height: "300px", 
		overflow: "hidden",
		display: "flex", 
		justifyContent: "center", 
		alignItems: "center",
		zIndex: "10",
		position: "relative"
	},
	playIcon: {
		fontSize: "67px",
		cursor: "pointer",
		opacity: "0.7"
	}
}));
