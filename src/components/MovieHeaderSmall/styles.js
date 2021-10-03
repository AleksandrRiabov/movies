import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '30px',
		background: '#28211f',
	},
	content: {
		display: 'flex',
		padding: '15px 40px',
	},
	imageWrapper: {
		width: '58px',
		height: '87px',
		background: 'grey',
	},
	arrow: {
		fontSize: '14px',
		color: '#fff',
		paddingRight: '3px',
	},
	links: {
		paddingLeft: '40px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		display: 'inline-block',
		color: '#fff',
		fontWeight: '600',
		marginRight: '5px',
	},
	text: {
		display: 'inline-block',
		color: '#ffffffad',
	},
	flexWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
}));