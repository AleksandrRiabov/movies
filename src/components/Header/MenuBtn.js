import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	inner: {
		padding: "10px",
		background: "#444141",
		color: "#fff",
		width: "300px"
	},
	genre: {
		background: "teal",
		borderRadius: "5px",
		padding: "3px"
	}
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuBtn({genres}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
	
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Genres
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
		 <Grid container spacing={1} className={classes.inner}>
		  {genres.map(genre => {
                   return ( 
					   <Grid item xs={4}>
						   <Box  className={classes.genre} key={genre.id} data={genre.id}>{genre.name}</Box>
					   </Grid>
				   )   
		  })}
		  </Grid>
      </StyledMenu>
    </div>
  );
}
