import React, {useContext, useReducer, useEffect} from "react";
import apiReducer from "./apiReducer";
import {API_URL, API_KEY_3} from "./api/api";
import {getMovieCredits, getMovieDetails} from "./services"

const ApiContext = React.createContext();

const initialSatate = {
     movies: [],
     filter: "popularity.desc",
	 selectedGenres: [],
	 query: "",
	 credits: {},
	 details: {},
}
 



const AppProvider = ({children}) => {
	const [state, dicpatch] = useReducer(apiReducer, initialSatate); 
	const genresQuery = state.selectedGenres.length ? `${encodeURI("&with_genres=" + state.selectedGenres.join(","))}` : "";	
	const getMoviesUrl = `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${state.filter}${genresQuery}`	
	const searchMoviesUrl = `${API_URL}/search/movie?api_key=${API_KEY_3}&query=${state.query}`
	
	useEffect(() => {
		let timerId
		if (state.query === ""){
			getMovies(getMoviesUrl);
		} else {
			timerId = setTimeout(() => {
		    getMovies(searchMoviesUrl);
		}, 1000);
		}	
		return () => {
			clearTimeout(timerId) 
		}
	}, [state.query, state.selectedGenres, state.filter]);
	
	async function getMovies(url){
		try{
			const response = await fetch(url)
		    const data = await response.json();
			dicpatch({type: "SET DATA", payload: data.results});
		} catch (error) {
			console.log(error.message)
		}
	}
	
	const setQuery = (value) => {
	dicpatch({type: "SET QUERY", payload: value});
}
	
	const selectGenre = (selectedGenreId) => {
		setQuery("");
		if (state.selectedGenres.includes(selectedGenreId)){
			const updatedGenres = state.selectedGenres.filter(gener => gener !== selectedGenreId);
			dicpatch({type: "SELECT GENRE", payload: updatedGenres});
		} else {
			const updatedGenres = [...state.selectedGenres, selectedGenreId];
			dicpatch({type: "SELECT GENRE", payload: updatedGenres});
		}
	}
	const resetGenres = () => {
		dicpatch({type: "RESET GENRES"})
	}
	
	const setFilter = (filter) => {
		dicpatch({type: "SET FILTER", payload: filter});
	}
	
	const getCredits = async(id) => {
		const credits = await getMovieCredits(id);
		dicpatch({type: "SET CREDITS", payload: credits});
	}
	
	const getDetails = async(id) => {
		const details = await getMovieDetails(id);
		dicpatch({type: "SET DETAILS", payload: details});
	}
	
	const clearDetails = () => {
		dicpatch({type: "SET CREDITS", payload: {}});
		dicpatch({type: "SET DETAILS", payload: {}});
	}
	
	const context = {
		movies: state.movies,
		getMovies,
		genres: state.genres,
		selectGenre,
		setQuery,
		query: state.query,
		selectedGenres: state.selectedGenres,
		setFilter,
		filter: state.filter,
		resetGenres,
		getCredits,
		credits: state.credits,
		getDetails,
		details: state.details,
		clearDetails
	}
	
	return <ApiContext.Provider value={context}> 
		{children}
	</ApiContext.Provider>
}

const useApiContext = () => {
	return useContext(ApiContext)
}

export {AppProvider, useApiContext}