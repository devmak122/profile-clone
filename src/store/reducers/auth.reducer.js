import {
  BATCH_CANCEL,
  BATCH_CANCEL_FAILURE,
  BATCH_CANCEL_SUCCESS,
  BATCH_CHANGE_REQ,
  BATCH_CHANGE_REQ_FAILURE,
  BATCH_CHANGE_REQ_LIST,
  BATCH_CHANGE_REQ_LIST_FAILURE,
  BATCH_CHANGE_REQ_LIST_SUCCESS,
  BATCH_CHANGE_REQ_SUCCESS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  CHECK_USER,
  CHECK_USER_FAILURE,
  CHECK_USER_SUCCESS,
  GET_BATCH_LIST,
  GET_BATCH_LIST_FAILURE,
  GET_BATCH_LIST_SUCCESS,
  GET_PROFILE_INFO,
  GET_PROFILE_INFO_FAILURE,
  GET_PROFILE_INFO_SUCCESS,
  PROFILE_CHANGE_LIST,
  PROFILE_CHANGE_LIST_FAILURE,
  PROFILE_CHANGE_LIST_SUCCESS,
  PROFILE_CHANGE_REQ,
  PROFILE_CHANGE_REQ_FAILURE,
  PROFILE_CHANGE_REQ_SUCCESS,
  REGISTER_TO_EVENT,
  REGISTER_TO_EVENT_FAILURE,
  REGISTER_TO_EVENT_SUCCESS,
  SUBMIT_QUERY,
  SUBMIT_QUERY_FAILURE,
  SUBMIT_QUERY_SUCCESS,
} from "../storeType";

const initialstate = {
  loader: false,
  checkUserInfo: null,
  userError: null,
  changepwddmsg: null,
  pwderror: null,
  submitquerymsg: null,
  profilechangereq: null,
  profilechangelist: null,
  batchListres: null,
  batchchangrres: null,
  batchreqlist: null,
  batchcancelres: null,
};
const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case CHECK_USER:
      return {
        ...state,
        loader: true,
      };
    case CHECK_USER_SUCCESS:
      return {
        ...state,
        loader: false,
        checkUserInfo: action?.payload,
      };
    case CHECK_USER_FAILURE:
      return {
        ...state,
        loader: false,
        userError: action?.payload,
      };
    case GET_PROFILE_INFO:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        loader: false,
        profileData: action?.payload,
      };
    case GET_PROFILE_INFO_FAILURE:
      return {
        ...state,
        loader: false,
      };
    case CHANGE_PASSWORD:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loader: false,
        changepwddmsg: action?.payload,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case SUBMIT_QUERY:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case SUBMIT_QUERY_SUCCESS:
      return {
        ...state,
        loader: false,
        submitquerymsg: action?.payload,
      };
    case SUBMIT_QUERY_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case PROFILE_CHANGE_REQ:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case PROFILE_CHANGE_REQ_SUCCESS:
      return {
        ...state,
        loader: false,
        profilechangereq: action?.payload,
      };
    case PROFILE_CHANGE_REQ_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case PROFILE_CHANGE_LIST:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case PROFILE_CHANGE_LIST_SUCCESS:
      return {
        ...state,
        loader: false,
        profilechangelist: action?.payload,
      };
    case PROFILE_CHANGE_LIST_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case GET_BATCH_LIST:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case GET_BATCH_LIST_SUCCESS:
      return {
        ...state,
        loader: false,
        batchListres: action?.payload,
      };
    case GET_BATCH_LIST_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case BATCH_CHANGE_REQ:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case BATCH_CHANGE_REQ_SUCCESS:
      return {
        ...state,
        loader: false,
        batchchangrres: action?.payload,
      };
    case BATCH_CHANGE_REQ_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case BATCH_CHANGE_REQ_LIST:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case BATCH_CHANGE_REQ_LIST_SUCCESS:
      return {
        ...state,
        loader: false,
        batchreqlist: action?.payload,
      };
    case BATCH_CHANGE_REQ_LIST_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case BATCH_CANCEL:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case BATCH_CANCEL_SUCCESS:
      return {
        ...state,
        loader: false,
        batchcancelres: action?.payload,
      };
    case BATCH_CANCEL_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    
    default:
      return state;
  }
};
export default authReducer;
