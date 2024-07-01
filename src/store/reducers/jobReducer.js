// jobReducer.js (or wherever your jobReducer is defined)

const initialState = {
  jobs: [], // Initialize jobs as an empty array
  isLoading: false,
  searchTerm: '',
  filters: {} // You can initialize filters as needed
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_JOBS_REQUEST':
          return {
              ...state,
              isLoading: true
          };
      case 'FETCH_JOBS_SUCCESS':
          return {
              ...state,
              jobs: action.payload, // Update jobs with fetched data
              isLoading: false
          };
      case 'FETCH_JOBS_FAILURE':
          return {
              ...state,
              isLoading: false
          };
      case 'SET_SEARCH_TERM':
          return {
              ...state,
              searchTerm: action.payload
          };
      case 'SET_FILTERS':
          return {
              ...state,
              filters: action.payload
          };
      default:
          return state;
  }
};

export default jobReducer;
