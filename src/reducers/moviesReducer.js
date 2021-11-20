const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'SET DATA':
      return { ...state, movies: action.payload };
    case 'SET LOADING':
      return { ...state, loading: action.payload };
    case 'SET ERROR':
      return { ...state, error: action.payload };
    case 'SELECT GENRE':
      return { ...state, selectedGenres: action.payload };
    case 'RESET GENRES':
      return { ...state, selectedGenres: [] };
    case 'SET PAGE':
      return { ...state, page: action.payload };
    case 'SET QUERY':
      return { ...state, query: action.payload };
    case 'SET FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
