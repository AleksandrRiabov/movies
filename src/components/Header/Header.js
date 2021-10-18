import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Spiner from '../Spiner/Spiner';


const useStyles = makeStyles((theme) => ({
	header: {
		position: "relative",
	},
	headerTop : {
		position: "relative",
		width: "100%",
		backgroundSize: "cover",
		zIndex: "-1000"
	},
	headerTopRight: {
		position: "relative",
		left: "-100px",
		color: "#fff",
		display: "flex", 
		justifyContent: "center", 
		alignItems: "center",
		height: "100%",
		background: "linear-gradient(270deg, rgba(48,48,48,1) 90%, rgba(0,0,0,0) 100%)",
		paddingLeft: "50px"
	},
	shadow: {
		position: "absolute",
		width: "100%",
		height: "100%",
        background: "linear-gradient(0deg, rgba(48,48,48,1) 20%, rgba(0,0,0,0) 40%)",
		zIndex: "-1"
	}
}));

const Header = () => {
	const classes = useStyles();

	// const {loading, error} = props;
	
	// if (loading) {
	// 	return (
	// 		<Box style={{ position: 'relative', width: '100%', height: '200px' }}>
	// 			<Spiner />
	// 		</Box>
	// 	);
	// }

	// if (error.isError) {
	// 	return (
	// 		<Box>
	// 			<Typography variant="h6">{error.message}</Typography>
	// 		</Box>
	// 	);
	// }
   
	console.log("Header render")
	return (
		<Box className={classes.header}>
			<div className={classes.shadow}></div>
			<Grid container>
			<Grid item xs={12} md={9}>
			   <Box className={classes.headerTop}>
				   <img width="100%" src="https://image.tmdb.org/t/p/original/qD45xHA35HdJDGOaA1AgDwiWEgO.jpg" alt="main"/>
				</Box>	
			</Grid>
			<Hidden only={["xs", "sm"]}>
				<Grid item  md={3} >
					<Box className={classes.headerTopRight}>
					  <Typography variant="h2">The Tomorrow War</Typography>
					</Box>
				</Grid>
			</Hidden>
			</Grid>	
		</Box>
	)
}

export default Header;