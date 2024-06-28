import {
  ADD_TESTIMONIAL,
  ADD_TESTIMONIAL_FAILURE,
  ADD_TESTIMONIAL_SUCCESS,
  GET_ALL_BLOGS,
  GET_ALL_BLOGS_FAILURE,
  GET_ALL_BLOGS_SUCCESS,
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_GALARY,
  GET_ALL_GALARY_FAILURE,
  GET_ALL_GALARY_SUCCESS,
  GET_ALL_PLANS,
  GET_ALL_PLANS_FAILURE,
  GET_ALL_PLANS_SUCCESS,
  GET_ALL_TESTIMONIALS,
  GET_ALL_TESTIMONIALS_FAILURE,
  GET_ALL_TESTIMONIALS_SUCCESS,
  GET_BLOG_BY_ID,
  GET_BLOG_BY_ID_FAILURE,
  GET_BLOG_BY_ID_SUCCESS,
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_FAILURE,
  GET_EVENT_BY_ID_SUCCESS,
  GET_SIGN_URL,
  GET_SIGN_URL_FAILURE,
  GET_SIGN_URL_SUCCESS,
  REGISTER_TO_EVENT,
  REGISTER_TO_EVENT_FAILURE,
  REGISTER_TO_EVENT_SUCCESS,
  SUBSCRIBE_FORM,
  SUBSCRIBE_FORM_FAILURE,
  SUBSCRIBE_FORM_SUCCESS,
  UPDATE_STATUS,
  UPDATE_STATUS_FAILURE,
  UPDATE_STATUS_SUCCESS,
} from "../storeType";

const initialstate = {
  galaryData: null,
  loader: false,
  allBlogs: null,
  blogInfo: null,
  eventdetails: null,
  eventbyId: null,
  registerEvent: null,
  addtest: null,
  planList: null,
  testimonialList: null,
  updateres: null,
  signedurl: null,
};

const webReducer = (state = initialstate, action) => {
  console.log("galaryData", action?.payload);
  switch (action.type) {
    case GET_ALL_GALARY:
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_GALARY_SUCCESS:
      return {
        ...state,
        loader: false,
        galaryData: action?.payload,
      };
    case GET_ALL_GALARY_FAILURE:
      return {
        ...state,
        loader: false,
        galaryData: action?.payload,
      };

    case GET_ALL_BLOGS:
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        loader: false,
        allBlogs: action?.payload,
      };
    case GET_ALL_BLOGS_FAILURE:
      return {
        ...state,
        loader: false,
        allBlogs: action?.payload,
      };
    case GET_BLOG_BY_ID:
      return {
        ...state,
        loader: true,
      };
    case GET_BLOG_BY_ID_SUCCESS:
      return {
        ...state,
        loader: false,
        blogInfo: action?.payload,
      };
    case GET_BLOG_BY_ID_FAILURE:
      return {
        ...state,
        loader: false,
        blogInfo: action?.payload,
      };

    case SUBSCRIBE_FORM:
      return {
        ...state,
        loader: true,
      };
    case SUBSCRIBE_FORM_SUCCESS:
      return {
        ...state,
        loader: false,
        subscribeform: action?.payload,
      };
    case SUBSCRIBE_FORM_FAILURE:
      return {
        ...state,
        loader: false,
      };
    case GET_ALL_EVENTS:
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loader: false,
        eventdetails: action?.payload,
      };
    case GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        loader: false,
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
        loader: true,
      };
    case GET_EVENT_BY_ID_SUCCESS:
      return {
        ...state,
        loader: false,
        eventbyId: action?.payload,
      };
    case GET_EVENT_BY_ID_FAILURE:
      return {
        ...state,
        loader: false,
      };
    case REGISTER_TO_EVENT:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case REGISTER_TO_EVENT_SUCCESS:
      return {
        ...state,
        loader: false,
        registerEvent: action?.payload,
      };
    case REGISTER_TO_EVENT_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case ADD_TESTIMONIAL:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case ADD_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        loader: false,
        addtest: action?.payload,
      };
    case ADD_TESTIMONIAL_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case GET_ALL_PLANS:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_PLANS_SUCCESS:
      return {
        ...state,
        loader: false,
        planList: action?.payload,
      };
    case GET_ALL_PLANS_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case GET_ALL_TESTIMONIALS:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case GET_ALL_TESTIMONIALS_SUCCESS:
      return {
        ...state,
        loader: false,
        testimonialList: action?.payload,
      };
    case GET_ALL_TESTIMONIALS_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case UPDATE_STATUS:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        loader: false,
        updateres: action?.payload,
      };
    case UPDATE_STATUS_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    case GET_SIGN_URL:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case GET_SIGN_URL_SUCCESS:
      return {
        ...state,
        loader: false,
        signedurl: action?.payload,
      };
    case GET_SIGN_URL_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };

    default:
      return state;
  }
};
export default webReducer;
