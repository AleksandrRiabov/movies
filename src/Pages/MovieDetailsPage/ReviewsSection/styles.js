import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		width: "100%",
		height: "200px"
	},	sectionReview: {
		width: '100%',
		zIndex: '100',
		position: 'relative',
	},
	title: {
		padding: '20px 0',
	},
}));