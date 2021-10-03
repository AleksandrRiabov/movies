import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		padding: '20px 5px',
		width: '98%',
		marginBottom: '20px',
	},
	movie: {
		display: 'flex',
		flexWrap: 'wrap',
		padding: '3px 10px',
	},
	bold: {
		fontWeight: '700',
		marginRight: '10px',
	},
	date: {
		width: '60px',
		display: 'flex',
		justifyContent: 'center',
		marginRight: '15px',
	},
	horizontalLine: {
		width: '100%',
		height: '1px',
		background: '#ddd',
		margin: '10px 0',
	},
}));