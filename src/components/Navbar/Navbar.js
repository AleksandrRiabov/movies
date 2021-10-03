import React from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useMoviesContext } from '../../context/moviesContext';

import Login from "./Login/Login";

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	bg: {
		background: '#1b2439',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		color: '#fff',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	marginRight: {
		marginRight: "10px"
	}
}));

export default function Navbar() {
	const { setQuery, query } = useMoviesContext();
	const history = useHistory();
	const location = useLocation();

	const classes = useStyles();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const checkLoaction = () => {
		if (location.pathname !== '/') {
			history.push('/');
		}
	};


	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};



	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	


	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<p>Login</p>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<Badge  color="secondary">
						<AccountCircle />
					</Badge>
				</IconButton>
			</MenuItem>
			<MenuItem>
				<p>Logoff</p>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge color="secondary">
						<AccountCircle />
					</Badge>
				</IconButton>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar className={classes.bg} position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<MenuIcon />
					</IconButton>
					<Link to="/">
						<Typography className={classes.title} variant="h6" noWrap>
							Movies App
						</Typography>
					</Link>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							onChange={(e) => {
								setQuery(e.target.value);
								checkLoaction();
							}}
							placeholder="Search…"
							value={query}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Login />
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}