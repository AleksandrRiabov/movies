import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles';


export default function Navbar() {
	const [query, setQuery] = useState('');

	const history = useHistory();
	const location = useLocation();

	const classes = useStyles();

	useEffect(() => {
		if (query === '' && location.pathname !== '/search') {
			return;
		}
		const timerId = setTimeout(() => {
			history.push(`/search?query=${query}`);
		}, 600);
		return () => {
			clearTimeout(timerId);
		};
	}, [query]);

	return (
		<div className={classes.grow}>
			<AppBar className={classes.bg} position="static">
				<Container className={classes.container}>
					<Toolbar>
						<Link to="/">
							<Box className={classes.circle}>
								<Typography variant="h6" color="secondary">
									M
								</Typography>
							</Box>
							<Typography className={classes.logo} variant="h6" noWrap>
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
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}