import { useState, useEffect } from 'react';
import { getMovies } from '../services';

export const useFetchMovies = () => {
	const [filter, setFilter] = useState('popularity.desc');
	const [genres, setGenres] = useState([]);
	const [page, setPage] = useState(1);

	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ isError: false, message: '' });

	useEffect(() => {
		setLoading(true);
		setError({ isError: false, message: '' });

		const fetchData = async () => {
			try {
				const response = await getMovies({ page, filter, genres });
				setMovies(response);
			} catch (err) {
				setError({ isError: true, message: ' Something whent wrong. No Data Available..' });
				console.log(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [page, filter, genres]);

	return { movies, loading, setLoading, error, filter, setFilter, page, setPage, genres, setGenres };
};