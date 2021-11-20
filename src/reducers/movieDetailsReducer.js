const movieDetailsReducer = (state, action) => {
  switch (action.type) {
    case 'SET LOADING':
      return { ...state, loading: action.payload };
    case 'SET ERROR':
      return { ...state, error: action.payload };
    case 'SET DETAILS':
      return { ...state, details: action.payload };
    default:
      return state;
  }
};

export default movieDetailsReducer;
