import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services';

export const useFetchDetails = ({ id, extra }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ isError: false, message: '' });

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;
    setLoading(true);
    setError({ isError: false, message: '' });

    const fetchData = async () => {
      try {
        const response = await getMovieDetails(id, extra);
        if (isSubscribed) {
          setData(response);
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

  return { data, loading, error };
};
