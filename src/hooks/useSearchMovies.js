import { useState, useEffect } from 'react';
import { getMovies } from '../services';
import { API_URL, API_KEY_3 } from '../api/api';

export const useSearchMovies = (query = '') => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ isError: false, message: '' });

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    let isSubscribed = true;

    if (query.replace(/\s/g, '') === '') {
      setMovies({ results: [] });
      setLoading(false);
      return;
    }
    setLoading(true);
    setError({ isError: false, message: '' });

    const url = `${API_URL}/search/movie?api_key=${API_KEY_3}&query=${query}&page=${page}`;

    const fetchData = async () => {
      try {
        const response = await getMovies({ url });
        if (!response.results) {
          throw new Error();
        }

        setMovies(response);
      } catch (err) {
        setError({
          isError: true,
          message: ' Something whent wrong. No Data Available..',
        });
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (isSubscribed) {
      fetchData();
    }

    return () => (isSubscribed = false);
  }, [page, query]);

  return { movies, page, setPage, loading, error, setLoading };
};
