import React, { useState } from 'react';
import { useStyles } from './styles';
import { useMovieDetailsContext } from '../../../context/movieDetailsContext';
import HorizontalListing from '../../../components/HorizontalListing/HorizontalListing';
import TrailerPreview from './TrailerPreview/TrailerPreview';
import TrailerModal from './TrailerModal/TrailerModal';
import Box from '@material-ui/core/Box';

const MovieTrailer = () => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState({
    showw: false,
    id: '',
    name: '',
  });

  const {
    details: { videos },
    loading,
    error,
  } = useMovieDetailsContext();

  if (loading) {
    return null;
  }

  if (error.isError) {
    return (
      <HorizontalListing title='Videos'>
        <Box className={classes.root}>{error.message}</Box>
      </HorizontalListing>
    );
  }

  if (!videos || !videos.results.length) {
    return null;
  }

  const sectionTitle =
    videos.results.length > 1 ? `Videos (${videos.results.length})` : `Video`;

  return (
    <>
      <HorizontalListing title={sectionTitle}>
        {videos.results.map((trailer) => {
          return (
            <Box key={trailer.key} className={classes.root}>
              <TrailerPreview
                setShowModal={setShowModal}
                key={trailer.key}
                id={trailer.key}
                name={trailer.name}
              />
            </Box>
          );
        })}
      </HorizontalListing>
      {showModal.show && (
        <TrailerModal
          title={showModal.name}
          id={showModal.id}
          setShowModal={setShowModal}
        />
      )}
      <hr />
    </>
  );
};

export default MovieTrailer;