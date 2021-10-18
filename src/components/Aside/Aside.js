import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Genres from "../../Pages/Movies/Genres/Genres"
import SortBy from "../SortBy/SortBy";

const useStyles = makeStyles({
  root: {
    width: "100%",
	 marginTop: "50px"
  },
});

export default function Aside(props) {
  const classes = useStyles();
 
  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <SortBy />
        </MenuItem>
		  <MenuItem>
		  <Genres/>
		  </MenuItem>
      </MenuList>
    </Paper>
  );
}
