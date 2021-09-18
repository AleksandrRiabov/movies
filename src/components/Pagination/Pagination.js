import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { useApiContext } from '../../apiContext';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	ul: {
		'& .MuiPaginationItem-root': {
			color: '#bfbfbf',
		},
	},
}));

export default function PaginationBar({ totalPages, page }) {
	const { setPage } = useApiContext();
	const classes = useStyles();
	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<div className={classes.root}>
			<Pagination
				classes={{ ul: classes.ul }}
				count={totalPages}
				page={page}
				onChange={handleChange}
			/>
		</div>
	);
}