import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { useMoviesContext } from '../../../../../context/moviesContext';
import clsx from 'clsx';
import { GENRES } from '../../../../../api/api';

const useStyles = makeStyles((theme) => ({
	genresWrapper: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		color: '#fff',
		padding: '10px 0px',
	},
	genre: {
		margin: theme.spacing(0.3),
		color: '#eee',
		textTransform: 'capitalize',
		fontSize: '12px',
		padding: '4px 12px',
		border: '1px solid #eeeeee3d',
	},
	slectedGenre: {
		color: '#d29e3e',
	},
	resetBtn: {
		color: '#f58800',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		padding: '5px',
		background: '#00000040',
		borderRadius: '5px',
		justifyContent: 'space-around',
		width: '115px',
	},
}));

const Genres = () => {
	const { selectedGenres, selectGenre } = useMoviesContext();
	const classes = useStyles();
	return (
		<Box className={classes.genresWrapper}>
			{GENRES.map((genre) => {
				return (
					<Button
						onClick={() => selectGenre(genre.id)}
						key={genre.id}
						data={genre.id}
						variant="outlined"
						className={clsx(
							classes.genre,
							selectedGenres.includes(genre.id) && classes.slectedGenre
						)}
					>
						{genre.name}
					</Button>
				);
			})}
			{selectedGenres.length > 1 ? (
				<Box onClick={() => selectGenre('reset')} className={classes.resetBtn}>
					Remove All <CancelOutlinedIcon />
				</Box>
			) : (
				''
			)}
		</Box>
	);
};

export default Genres;