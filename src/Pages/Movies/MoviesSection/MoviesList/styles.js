import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		[theme.breakpoints.down('md')]: {
			padding: '0 !important',
		},
	},
	item: {
		[theme.breakpoints.up('xs')]: {
			width: '50%',
		},
		[theme.breakpoints.up('sm')]: {
			width: '33.3%',
		},
		[theme.breakpoints.up('md')]: {
			width: '20%',
		},
	},
}));