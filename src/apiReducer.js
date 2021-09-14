const apiReducer = (state, action ) => {
	
	switch(action.type){
		case "SET DATA": 
			return {...state, movies: action.payload}	
		case "SELECT GENRE": 
			return {...state, selectedGenres: action.payload}
		case "RESET GENRES": 
			return {...state, selectedGenres: []}
		case "SET QUERY": 
			return {...state, query: action.payload}
		case "SET FILTER": 
			return {...state, filter: action.payload}
		case "SET CREDITS": 
			return {...state, credits: action.payload}
		case "SET DETAILS": 
			return {...state, details: action.payload}	
	
		default: 
			return state;
	}
}

export default apiReducer;