import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '15px',
		position: 'relative',
		minHeight: '200px',
		zIndex: '1',
	},
	video: {
		zIndex: '10',
	},
}));
