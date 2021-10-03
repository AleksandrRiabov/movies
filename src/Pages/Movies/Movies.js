import React from "react";

import Header from "../../components/Header/Header";
import MoviesList from "../../components/MoviesList/MoviesList";
import Aside from "../../components/Aside/Aside";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

const Movies = () => {
	console.log("render Movies")
  return (
	  <Container>
		  <Header />
      <Grid container spacing={3}>
        <Hidden only={["xs", "sm"]}>
          <Grid item md={3}>
            <Aside />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9}>
          <MoviesList />
        </Grid>
      </Grid>
	  </Container>
  );
};

export default Movies;

