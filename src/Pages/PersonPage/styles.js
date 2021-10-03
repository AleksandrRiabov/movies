import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		background: '#fff',
		minHeight: "100vh"
	},
	container: {
		padding: '30px 40px',
	},
	content: {
		display: 'flex',
		overflow: 'hidden',
		width: '100%',
	},
	rightColumn: {
		paddingLeft: '30px',
	},
	social: {
		marginTop: '30px',
	},
}));