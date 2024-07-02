<<<<<<< HEAD

import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    SET_SEARCH_TERM,
    SET_FILTERS,
  } from "../actions/jobActions";
  
  const initialState = {
    jobs: [],
    isLoading: false,
    error: null,
    searchTerm: '',
    filters: {},
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOBS_REQUEST:
        return { ...state, isLoading: true, error: null };
      case FETCH_JOBS_SUCCESS:
        return { ...state, isLoading: false, jobs: action.payload };
      case FETCH_JOBS_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      case SET_SEARCH_TERM:
        return { ...state, isLoading: true, searchTerm: action.payload };
      case SET_FILTERS:
        return { ...state, isLoading: true, filters: action.payload };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  
=======
// store/reducers/jobReducer.js
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  SET_SEARCH_TERM,
  SET_FILTERS,
} from "../actions/jobActions";

const initialState = {
  jobs: [],
  isLoading: false,
  error: null,
  searchTerm: '',
  filters: {},
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return { ...state, isLoading: false, jobs: action.payload };
    case FETCH_JOBS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, isLoading: true, searchTerm: action.payload };
    case SET_FILTERS:
      return { ...state, isLoading: true, filters: action.payload };
    default:
      return state;
  }
};

export default jobReducer;
>>>>>>> 8240e77f89de3171c19c920c6c785b3b031c11ac
