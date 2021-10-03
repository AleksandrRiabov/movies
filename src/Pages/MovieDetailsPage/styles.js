import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	whiteSection: {
		display: 'flex',
		background: '#fff',
	},
	leftColumn: {
		width: 'calc(100vw - 80px - 268px)',
		maxWidth: '900px',
		position: 'relative',
		paddingRight: '30px',
	},
	witeSectionWrapper: {
		display: 'flex',
	},
}));