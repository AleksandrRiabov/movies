import { useState, useEffect } from 'react';
import { getMovieDetails } from '../services';

export const useFetchMainDetails = (id, extra) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ isError: false, message: '' });

	useEffect(() => {
		setLoading(true);
		setError({ isError: false, message: '' });

		const fetchData = async () => {
			try {
				const response = await getMovieDetails(id);
				setData(response);
			} catch (err) {
				setError({ isError: true, message: ' Something whent wrong. No Data Available..' });
				console.log(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);

	return { data, loading, error };
};