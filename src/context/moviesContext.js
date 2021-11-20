import React, { useContext, useReducer, useEffect } from 'react';
import moviesReducer from '../reducers/moviesReducer';
import { API_URL, API_KEY_3 } from '../api/api';

const MoviesContext = React.createContext();

const initialSatate = {
  movies: { results: [] },
  filter: 'popularity.desc',
  selectedGenres: [],
  page: 1,
  loading: true,
  error: { isError: false, message: '' },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialSatate);

  const genresQuery = state.selectedGenres.length
    ? `${encodeURI('&with_genres=' + state.selectedGenres.join(','))}`
    : '';

  const getMoviesUrl = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${state.filter}${genresQuery}&page=${state.page}`;

  useEffect(() => {
    getMovies(getMoviesUrl);
  }, [state.selectedGenres, state.filter, state.page]);

  async function getMovies(url) {
    setLoading(true);
    setError({ isError: false, message: '' });

    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error('Something Whent Wrong.. Status Code is Not 200');
      }
      const data = await response.json();
      dispatch({ type: 'SET DATA', payload: data });
    } catch (error) {
      console.log(error.message);
      setError({ isError: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }

  const selectGenre = (selectedGenreId) => {
    setPage(1);
    if (selectedGenreId === 'reset') {
      dispatch({ type: 'RESET GENRES' });
    } else if (state.selectedGenres.includes(selectedGenreId)) {
      const updatedGenres = state.selectedGenres.filter(
        (gener) => gener !== selectedGenreId
      );
      dispatch({ type: 'SELECT GENRE', payload: updatedGenres });
    } else {
      const updatedGenres = [...state.selectedGenres, selectedGenreId];
      dispatch({ type: 'SELECT GENRE', payload: updatedGenres });
    }
  };

  const setFilter = (filter) => {
    setPage(1);
    dispatch({ type: 'SET FILTER', payload: filter });
  };

  const setPage = (value) => {
    dispatch({ type: 'SET PAGE', payload: value });
  };

  const setLoading = (value) => {
    dispatch({ type: 'SET LOADING', payload: value });
  };

  const setError = (value) => {
    dispatch({ type: 'SET ERROR', payload: value });
  };

  const context = {
    ...state,
    selectGenre,
    setFilter,
    setPage,
  };

  return (
    <MoviesContext.Provider value={context}>{children}</MoviesContext.Provider>
  );
};

const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export { AppProvider, useMoviesContext };
