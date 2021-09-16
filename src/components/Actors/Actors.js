import React, {useState, useEffect} from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import {useApiContext} from "../../apiContext"

const Actors = () => {
	const {credits} = useApiContext();
	const classes = useStyles();
	
	if (!credits.cast){
		return null
	}
	const actors = [];
	
	
	return (
		<Box>
		
			<Box className={classes.sectionTitle}>
					<Typography variant={"h5"}>Top Billed Cast</Typography>	
					</Box>
				<Box className={classes.actorsScroll}>
				   {credits.cast.map(actor => {
						const {name, character, profile_path, id} = actor;
						const personImage = profile_path 
						? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
						: "https://via.placeholder.com/138x175"
						return (
						  <a key={id} href={id} style={{display: "flex", marginLeft: "-10px"}}>
							 <Box className={classes.card}>
							<Box>
								<img src={personImage} alt={name}/>	
							</Box>	
							<Box className={classes.cardText}>
								<Typography variant="subtitle1">{name}</Typography>
								<Typography variant="caption" >{character}</Typography>
							</Box>
						  </Box> 	
						  </a>
						)
					})}
				</Box>	
			</Box>
	)
}

export default Actors 