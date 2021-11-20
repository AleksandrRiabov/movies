import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonDetails } from '../../services';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { useStyles } from './styles';
import Spiner from '../../components/Spiner/Spiner';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import PersonPhoto from './PersonPhoto/PersonPhoto';
import PersanalInfo from './PersanalInfo/PersanalInfo';
import HeaderRight from './HeaderRight/HeaderRight';
import ActingList from './ActingList/ActingList';

const PersonPage = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ isError: false, message: '' });

  useEffect(() => {
    window.scroll(0, 0);

    let isSubscribed = true;

    const fetchData = async () => {
      try {
        const response = await getPersonDetails({ id });
        if (isSubscribed) {
          setPerson(response);
        }
      } catch (err) {
        setError({
          isError: true,
          message: ' Something whent wrong. No Data Available..',
        });
        console.log(err);
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => (isSubscribed = false);
  }, [id]);

  if (loading) {
    return (
      <Box className={classes.root}>
        <Spiner color='#5f5f5f' />
      </Box>
    );
  }

  if (error.isError) {
    return <Box className={classes.root}>{error.message}</Box>;
  }

  const { name, profile_path, movie_credits } = person;
  const topTen = getTopTenMovies(movie_credits.cast);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.content}>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <Box className={classes.leftColumn}>
                <PersonPhoto
                  path={profile_path}
                  alt={name}
                  gender={person.gender}
                />
                <Hidden only={['md', 'lg', 'xl']}>
                  <Typography variant={'h4'} className={classes.titleMobile}>
                    {person.name}
                  </Typography>
                </Hidden>
                <Box className={classes.social}>
                  <SocialLinks details={person} />
                </Box>
                <PersanalInfo person={person} />
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Box className={classes.rightColumn}>
                <HeaderRight
                  movie_credits={topTen}
                  biography={person.biography}
                  name={person.name}
                />
                <ActingList cast={movie_credits.cast} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PersonPage;

function getTopTenMovies(cast) {
  return cast
    .sort((a, b) => {
      return b.popularity - a.popularity;
    })
    .slice(0, 10);
}
