import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SortBy from "../SortBy/SortBy";

const useStyles = makeStyles({
  root: {
    width: 230,
	 
	 color: "#fff" 
  },
});

export default function Aside() {
  const classes = useStyles();
 
  return (
    <Paper className={classes.root}>
      <MenuList>
		  
        <MenuItem>
          <SortBy />
        </MenuItem>

      </MenuList>
    </Paper>
  );
}
