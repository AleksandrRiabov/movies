import React, { useContext, useReducer } from 'react';
import movieDetailsReducer from '../reducers/movieDetailsReducer';
import { getMovieDetails } from '../services';

const MovieDetailsContext = React.createContext();

const initialSatate = {
  details: {},
  loading: true,
  error: { isError: false, message: '' },
};

const MovieDetailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieDetailsReducer, initialSatate);

  const setLoading = (value) => {
    dispatch({ type: 'SET LOADING', payload: value });
  };

  const setError = (value) => {
    dispatch({ type: 'SET ERROR', payload: value });
  };

  const getDetails = async (id) => {
    const extra = [
      'credits',
      'videos',
      'recommendations',
      'watch/providers',
      'external_ids',
      'reviews',
    ];

    setLoading(true);
    setError({ isError: false, message: '' });
    try {
      const data = await getMovieDetails(id, extra);
      if (data === undefined) {
        throw new Error('Something whent wrong..');
      }
      dispatch({ type: 'SET DETAILS', payload: data });
    } catch (err) {
      setError({ isError: true, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const context = {
    details: state.details,
    credits: state.details.credits,
    providers: state.details['watch/providers']
      ? state.details['watch/providers'].results.GB
      : [],
    loading: state.loading,
    error: state.error,
    externalIds: state.details.external_ids,
    reviews: state.details.reviews ? state.details.reviews.results : {},
    getDetails,
    setLoading,
    movieId: state.details.id,
    title: state.details.title,
  };

  return (
    <MovieDetailsContext.Provider value={context}>
      {children}
    </MovieDetailsContext.Provider>
  );
};

const useMovieDetailsContext = () => {
  return useContext(MovieDetailsContext);
};

export { MovieDetailsProvider, useMovieDetailsContext };