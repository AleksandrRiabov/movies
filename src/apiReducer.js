const apiReducer = (state, action) => {
	switch (action.type) {
		case 'SET DATA':
			return { ...state, movies: action.payload };
		case 'SELECT GENRE':
			return { ...state, selectedGenres: action.payload };
		case 'RESET GENRES':
			return { ...state, selectedGenres: [] };
		case 'SET PAGE':
			return { ...state,  page: action.payload };
		case 'SET QUERY':
			return { ...state, query: action.payload };
		case 'SET FILTER':
			return { ...state, filter: action.payload };
		case 'SET CREDITS':
			return { ...state, credits: action.payload };
		case 'SET DETAILS':
			return { ...state, details: action.payload };
		case 'SET SOCIAL IDS':
			return { ...state, socialIds: action.payload };
		case 'SET PROVIDERS':
			return { ...state, providers: action.payload };
		case 'SET RECOMENDET':
			return { ...state, recomendet: action.payload };
		default:
			return state;
	}
};

export default apiReducer;