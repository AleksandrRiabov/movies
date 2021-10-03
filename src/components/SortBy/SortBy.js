import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {SORT_BY} from "../../api/api";

import {useMoviesContext} from "../../context/moviesContext";


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
	color: "#fff"
  },
	
}));

export default function SortBy() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
	
	const {setFilter, filter} = useMoviesContext();
	
	
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Sort By</InputLabel>
        <Select
          labelId="sort_by"
          id="sort_by"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={filter}
          onChange={handleChange}
        >
			{SORT_BY.map(filter => {
				return <MenuItem key={filter.filter} value={filter.filter}>{filter.name}</MenuItem>
			})}
        </Select>
      </FormControl>
    </div>
  );
}
