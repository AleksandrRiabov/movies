import React from 'react';
import { useMovieDetailsContext } from '../../../../context/movieDetailsContext';
import Spiner from '../../../../components/Spiner/Spiner';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const WatchProviders = () => {
  const classes = useStyles();

  const { providers, loading, error } = useMovieDetailsContext();

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

  if (!providers) {
    return null;
  }
  return (
    <Box>
      {providers.flatrate && (
        <Box className={classes.providersBox}>
          <Typography className={classes.providersTitle}>
            Streaming :
          </Typography>
          {providers.flatrate.map((provider) => {
            return (
              <Box key={provider.logo_path} className={classes.providerLogo}>
                <img
                  width='100%'
                  src={`https://image.tmdb.org/t/p/w45/${provider.logo_path}`}
                  alt={provider.name}
                />
              </Box>
            );
          })}
        </Box>
      )}
      {providers.buy && (
        <Box className={classes.providersBox}>
          <Typography className={classes.providersTitle}>Buy :</Typography>
          <Box className={classes.logosWrapper}>
            {providers.buy.map((provider) => {
              return (
                <Box key={provider.logo_path} className={classes.providerLogo}>
                  <img
                    width='100%'
                    src={`https://image.tmdb.org/t/p/w200/${provider.logo_path}`}
                    alt={provider.name}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WatchProviders;