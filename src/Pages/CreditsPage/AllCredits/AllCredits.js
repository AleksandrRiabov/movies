import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

import PersonSmallCard from './PersonSmallCard/PersonSmallCard';

const AllCredits = ({ data }) => {
	const { cast, crew } = data;
	const classes = useStyles();
	
	const sortedByDepartmentCrew = crew.sort((a, b) => b.department - a.department);
	
	return (
		<Container>
			<Grid container spacing={3} className={classes.root}>
				<Grid item xs={6}>
					<Box>
						<Box>
							<Typography variant="h6">{`Cast ${cast.length}`}</Typography>
						</Box>
						<Box>
							{cast &&
								cast.map((person) => {
									return <PersonSmallCard key={person.id} person={person} />;
								})}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box>
						<Box>
							<Typography variant="h6">{`Crew ${crew.length}`}</Typography>
						</Box>
						<Box>
							{crew &&
								sortedByDepartmentCrew.map((person) => {
									return <PersonSmallCard key={person.id + person.job} person={person} />;
								})}
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AllCredits;


function sortByDepartment(arr) {
	return arr.sort((a, b) => b.department - a.department) 
}