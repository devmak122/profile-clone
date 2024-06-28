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

export const allgallery = (payload) => {
  return {
    type: GET_ALL_GALARY,
    payload: payload,
  };
};
export const allgallerySuccess = (payload) => {
  return {
    type: GET_ALL_GALARY_SUCCESS,
    payload: payload,
  };
};
export const allgalleryFailure = (payload) => {
  return {
    type: GET_ALL_GALARY_FAILURE,
    payload: payload,
  };
};

export const blogList = (payload) => {
  return {
    type: GET_ALL_BLOGS,
    payload: payload,
  };
};
export const blogListSuccess = (payload) => {
  return {
    type: GET_ALL_BLOGS_SUCCESS,
    payload: payload,
  };
};
export const blogListFailure = (payload) => {
  return {
    type: GET_ALL_BLOGS_FAILURE,
    payload: payload,
  };
};

export const blogbyId = (payload) => {
  return {
    type: GET_BLOG_BY_ID,
    payload: payload,
  };
};
export const blogbyIdSuccess = (payload) => {
  return {
    type: GET_BLOG_BY_ID_SUCCESS,
    payload: payload,
  };
};
export const blogbyIdFailure = (payload) => {
  return {
    type: GET_BLOG_BY_ID_FAILURE,
    payload: payload,
  };
};

export const subscribeForm = (payload, callback) => {
  return {
    type: SUBSCRIBE_FORM,
    payload: payload,
    callback,
  };
};
export const subscribeFormSuccess = (payload) => {
  return {
    type: SUBSCRIBE_FORM_SUCCESS,
    payload: payload,
  };
};
export const subscribeFormFailure = (payload) => {
  return {
    type: SUBSCRIBE_FORM_FAILURE,
    payload: payload,
  };
};
export const getAllEvents = (payload, callback) => {
  return {
    type: GET_ALL_EVENTS,
    payload: payload,
    callback,
  };
};
export const getAllEventsSuccess = (payload) => {
  return {
    type: GET_ALL_EVENTS_SUCCESS,
    payload: payload,
  };
};
export const getAllEventsFailure = (payload) => {
  return {
    type: GET_ALL_EVENTS_FAILURE,
    payload: payload,
  };
};
export const getEventbyId = (payload, callback) => {
  return {
    type: GET_EVENT_BY_ID,
    payload: payload,
    callback,
  };
};
export const getEventbyIdSuccess = (payload) => {
  return {
    type: GET_EVENT_BY_ID_SUCCESS,
    payload: payload,
  };
};
export const getEventbyIdFailure = (payload) => {
  return {
    type: GET_EVENT_BY_ID_FAILURE,
    payload: payload,
  };
};
export const registerToEvent = (payload, callback) => {
  return {
    type: REGISTER_TO_EVENT,
    payload: payload,
    callback,
  };
};
export const registerToEventSuccess = (payload) => {
  return {
    type: REGISTER_TO_EVENT_SUCCESS,
    payload: payload,
  };
};
export const registerToEventFailure = (payload) => {
  return {
    type: REGISTER_TO_EVENT_FAILURE,
    payload: payload,
  };
};
export const addTestimonial = (payload, callback) => {
  return {
    type: ADD_TESTIMONIAL,
    payload: payload,
    callback,
  };
};
export const addTestimonialSuccess = (payload) => {
  return {
    type: ADD_TESTIMONIAL_SUCCESS,
    payload: payload,
  };
};
export const addTestimonialFailure = (payload) => {
  return {
    type: ADD_TESTIMONIAL_FAILURE,
    payload: payload,
  };
};
export const getAllPlans = (payload, callback) => {
  return {
    type: GET_ALL_PLANS,
    payload: payload,
    callback,
  };
};
export const getAllPlansSuccess = (payload) => {
  return {
    type: GET_ALL_PLANS_SUCCESS,
    payload: payload,
  };
};
export const getAllPlansFailure = (payload) => {
  return {
    type: GET_ALL_PLANS_FAILURE,
    payload: payload,
  };
};
export const getAllTestimonials = (payload, callback) => {
  return {
    type: GET_ALL_TESTIMONIALS,
    payload: payload,
    callback,
  };
};
export const getAllTestimonialsSuccess = (payload) => {
  return {
    type: GET_ALL_TESTIMONIALS_SUCCESS,
    payload: payload,
  };
};
export const getAllTestimonialsFailure = (payload) => {
  return {
    type: GET_ALL_TESTIMONIALS_FAILURE,
    payload: payload,
  };
};
export const updateStatus = (payload, callback) => {
  console.log("herecheck678");
  return {
    type: UPDATE_STATUS,
    payload: payload,
    callback,
  };
};
export const updateStatusSuccess = (payload) => {
  return {
    type: UPDATE_STATUS_SUCCESS,
    payload: payload,
  };
};
export const updateStatusFailure = (payload) => {
  return {
    type: UPDATE_STATUS_FAILURE,
    payload: payload,
  };
};
export const signedUrl = (payload, callback) => {
  console.log("herecheck678");
  return {
    type: GET_SIGN_URL,
    payload: payload,
    callback,
  };
};
export const signedUrlSuccess = (payload) => {
  return {
    type: GET_SIGN_URL_SUCCESS,
    payload: payload,
  };
};
export const signedUrlFailure = (payload) => {
  return {
    type: GET_SIGN_URL_FAILURE,
    payload: payload,
  };
};
