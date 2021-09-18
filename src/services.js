import {API_URL, API_KEY_3} from "./api/api";

export const getMovieDetails = async (movieId) => {
	const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY_3}`
	try{
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch(err){
		console.log(err);
	}
}



export const getMovieDetail = async ({id, query}) => {
	const url = `${API_URL}/movie/${id}/${query}?api_key=${API_KEY_3}`
	try{
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch(err){
		console.log(err);
	}
}

