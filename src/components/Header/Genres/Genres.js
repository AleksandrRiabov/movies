import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import {useApiContext} from "../../../apiContext";
import clsx from "clsx";
import { GENRES} from "../../../api/api";


const useStyles = makeStyles((theme) => ({
	genresWrapper: {
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		color: "#fff",
		padding: "10px 0 20px"
	},
	genre: {
		margin: theme.spacing(0.3),
		color: "grey"
	},
	slectedGenre: {
		color: "#d29e3e"
	},
	resetBtn: {
		color: "#f58800",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(1),
		justifyContent: "space-around",
		width: "115px"
	}
}));


const Genres = () => {
	const { selectedGenres, selectGenre, resetGenres } = useApiContext();
	const classes = useStyles();
	return (
	  <Container>
				<Box className={classes.genresWrapper}>
				  {GENRES.map(genre => {
                   return  <Button 
							   onClick={() => selectGenre(genre.id)}
							   key={genre.id}
							   data={genre.id} 
							   variant="outlined"
							   className={clsx(classes.genre, selectedGenres.includes(genre.id) && classes.slectedGenre)}
							   >
					   {genre.name}
				   </Button>	   
				})}
					{selectedGenres.length > 1
						? <Box onClick={() => resetGenres()}
							  className={classes.resetBtn}>
							Remove All <CancelOutlinedIcon />
						</Box> : ""}
				  </Box>
	  </Container>
	)
}

export  default Genres;