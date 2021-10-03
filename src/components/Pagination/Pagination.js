import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useMoviesContext } from '../../context/moviesContext';

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
	const { setPage } = useMoviesContext();
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