import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	card: {
		padding: '3px',
	},
	root: {
		maxWidth: 345,
		background: '#1c1f35',
		color: '#fff',
	},
	textSecondary: {
		color: '#dedede',
	},
	star: {
		color: 'gold',
	},
	mobRatingWrapper: {
		display: 'flex',
	},
	titleWrapper: {
		height: '40px',
		overflow: 'hidden',
	},
	imageBox: {
		paddingTop: '150%',
		position: 'relative',
		background: '#444654',
	},
	media: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	skeleton: {
		paddingTop: '150%',
		borderRadius: '5px',
	},
	skeletonFooter: {
		height: '73px',
		marginTop: '20px',
	},
});