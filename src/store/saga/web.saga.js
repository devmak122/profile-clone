import { call, put, takeLatest } from "redux-saga/effects";
import {
  SubscribeApi,
  addTestiimonialApi,
  alleventsApi,
  eventBookApi,
  getAllBlogsApi,
  getAllPlansApi,
  getAllTestimonialsApi,
  getAllgalaryApi,
  getBlogByIdApi,
  getSignedUrlApi,
  geteventbyIdApi,
  updatestatusEventApi,
} from "../api";
import {
  addTestimonialFailure,
  addTestimonialSuccess,
  allgalleryFailure,
  allgallerySuccess,
  blogListFailure,
  blogListSuccess,
  blogbyIdFailure,
  blogbyIdSuccess,
  getAllEventsSuccess,
  getAllPlansFailure,
  getAllPlansSuccess,
  getAllTestimonialsFailure,
  getAllTestimonialsSuccess,
  getEventbyIdFailure,
  getEventbyIdSuccess,
  registerToEventFailure,
  registerToEventSuccess,
  signedUrl,
  signedUrlFailure,
  signedUrlSuccess,
  subscribeFormFailure,
  subscribeFormSuccess,
  updateStatusFailure,
  updateStatusSuccess,
} from "../actions/website.action";
import {
  ADD_TESTIMONIAL,
  GET_ALL_BLOGS,
  GET_ALL_EVENTS,
  GET_ALL_GALARY,
  GET_ALL_PLANS,
  GET_ALL_TESTIMONIALS,
  GET_BLOG_BY_ID,
  GET_EVENT_BY_ID,
  GET_SIGN_URL,
  REGISTER_TO_EVENT,
  SUBSCRIBE_FORM,
  UPDATE_STATUS,
} from "../storeType";
import toast from "react-hot-toast";

function* getgallerySaga(action) {
  try {
    const response = yield call(getAllgalaryApi, action?.payload);
    if (response?.data) {
      console.log("response?.data", response?.data);
      yield put(allgallerySuccess(response?.data));
    }
  } catch (error) {
    yield put(allgalleryFailure(error));
  }
}
function* getAllBlogsSaga(action) {
  try {
    const response = yield call(getAllBlogsApi, action?.payload);
    if (response?.data) {
      yield put(blogListSuccess(response?.data));
    }
  } catch (error) {
    yield put(blogListFailure(error));
  }
}
function* getBlogInfoSaga(action) {
  try {
    const response = yield call(getBlogByIdApi, action?.payload);
    if (response?.data) {
      yield put(blogbyIdSuccess(response?.data));
    }
  } catch (error) {
    yield put(blogbyIdFailure(error));
  }
}
function* subscribeFormSaga(action) {
  try {
    const response = yield call(SubscribeApi, action?.payload);
    if (response?.data) {
      yield put(subscribeFormSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(subscribeFormFailure(error));
  }
}
function* alleventsSaga(action) {
  try {
    const response = yield call(alleventsApi, action?.payload);
    if (response?.data) {
      yield put(getAllEventsSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(subscribeFormFailure(error));
  }
}
function* getEventbyIdSaga(action) {
  try {
    const response = yield call(geteventbyIdApi, action?.payload);
    if (response?.data) {
      yield put(getEventbyIdSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(getEventbyIdFailure(error));
  }
}
function* registerEventSaga(action) {
  try {
    const response = yield call(eventBookApi, action?.payload);
    if (response?.data) {
      yield put(registerToEventSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(registerToEventFailure(error));
    if (action?.callback) {
      action?.callback(error);
    }
    toast.error(error?.response?.data?.data);
  }
}
function* addTestimonialSaga(action) {
  try {
    const response = yield call(addTestiimonialApi, action?.payload);
    if (response?.data) {
      yield put(addTestimonialSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(addTestimonialFailure(error));
    toast.error(error?.response?.data?.data);
  }
}
function* getAllPlanSaga(action) {
  try {
    const response = yield call(getAllPlansApi, action?.payload);
    if (response?.data) {
      yield put(getAllPlansSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(getAllPlansFailure(error));
  }
}
function* getAllTestimonialSaga(action) {
  try {
    const response = yield call(getAllTestimonialsApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(getAllTestimonialsSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(getAllTestimonialsFailure(error));
    toast.error(error?.response?.data?.data);
  }
}
function* updateStatusSaga(action) {
  try {
    const response = yield call(updatestatusEventApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(updateStatusSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(updateStatusFailure(error));
    toast.error(error?.response?.data?.data);
  }
}
function* signedurlSaga(action) {
  try {
    const response = yield call(getSignedUrlApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(signedUrlSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(signedUrlFailure(error));
    toast.error(error?.response?.data?.data);
  }
}

export function* webSaga() {
  yield takeLatest(GET_ALL_GALARY, getgallerySaga);
  yield takeLatest(GET_ALL_BLOGS, getAllBlogsSaga);
  yield takeLatest(GET_BLOG_BY_ID, getBlogInfoSaga);
  yield takeLatest(SUBSCRIBE_FORM, subscribeFormSaga);
  yield takeLatest(GET_ALL_EVENTS, alleventsSaga);
  yield takeLatest(GET_EVENT_BY_ID, getEventbyIdSaga);
  yield takeLatest(REGISTER_TO_EVENT, registerEventSaga);
  yield takeLatest(ADD_TESTIMONIAL, addTestimonialSaga);
  yield takeLatest(GET_ALL_PLANS, getAllPlanSaga);
  yield takeLatest(GET_ALL_TESTIMONIALS, getAllTestimonialSaga);
  yield takeLatest(UPDATE_STATUS, updateStatusSaga);
  yield takeLatest(GET_SIGN_URL, signedurlSaga);
}
