import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';	
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	marginRight: {
		marginRight: "10px"
	}
}))

const Login = () => {
	const classes = useStyles();
	return (
		<IconButton
				color="inherit"
		>
			<Typography className={classes.marginRight} fontSize="small">
				Login
			</Typography>
			<AccountCircle />
		</IconButton>
	);
};

export default Login;