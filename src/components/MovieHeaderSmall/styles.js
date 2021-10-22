import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '30px',
		background: '#28211f',
	},
	content: {
		display: 'flex',
		padding: '15px 0',
		[theme.breakpoints.up('sm')]: {
			padding: '15px 40px',
		},
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
		paddingLeft: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		display: 'inline-block',
		color: '#fff',
		fontWeight: '600',
		marginRight: '5px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
	},
	year: {
		display: 'inline-block',
		color: '#ffffffad',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		},
	},
	goBack: {
		color: '#ffffffad',
	},
	flexWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
}));