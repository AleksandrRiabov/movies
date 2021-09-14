import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { getMovieDetails, getMovieCredits } from "../../services";
import TitleSection from "./TitleSection/TitleSection";
import Spiner from "../Spiner/Spiner";
import WatchProviders from "./WatchProviders/WatchProviders"
import {useApiContext} from "../../apiContext"


const MovieDetails= () => {
	const classes = useStyles();
	const {id} = useParams();
	const {getDetails, getCredits, credits, details, clearDetails} = useApiContext();
	
	
	useEffect(() => {
		getDetails(id);
		getCredits(id);
		
		return () => clearDetails()
	}, []);
	
	
	if (!details.title || !credits.crew){
		return  <Spiner />
	}
	
	const JOB_TITLES = ["Director", "Writer", "Story", "Creator"];
	const crew = credits.crew.filter(({job}) => JOB_TITLES.includes(job));
	
	const { 
		backdrop_path,
		poster_path, 
		title,
		vote_average,
		release_date, 
		genres,
		tagline,
		overview, 
		production_countries, 
		runtime,
	} = details;
	
	const backgroundImage = `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})`;
	return (
	<div style={{
				width: "100%",
				position: "realtive",
				backgroundPosition: "right -200px top",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundImage: backgroundImage
			}}>
		<Box className={classes.darkBg}>
		    <Container className={classes.headerInner}> 
			  <Box>
				<Box className={classes.headerPoster}>
				<img  style={{width: "100%"}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="alt"/>
				</Box>
				</Box>
			  <Box className={classes.headerDetails}>
				<TitleSection 
					release_date={release_date} 
					genres={genres}
					title={title}
					vote_average={vote_average}
					production_countries={production_countries}
					runtime={ runtime}
					/>
				  <Box className={classes.tagline}>
				  <Typography>{tagline}</Typography>
				  </Box>
				  <Box>
					<h3>Overview</h3>
				  </Box>
				  <Box><Typography gutterBottom>{overview}</Typography></Box>
				  <Box className={classes.creatorsBox} >
					  {crew.map((member, index) => {
							return (
							  <Box key={index} className={classes.creator}>
							  <Typography>{member.name}</Typography>
							  <Typography  variant="caption" >{member.job}</Typography >
							 </Box>
							)
						})}
				  </Box>
				  <WatchProviders movieId={id}/>
				</Box>
			</Container>	
		</Box>
	</div>
	)
}

export default MovieDetails;