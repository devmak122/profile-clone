import { call, put, takeLatest } from "redux-saga/effects";
import {
  batchChangeListApi,
  batchChangeReqApi,
  batchListApi,
  cancelBatchChangeApi,
  changepwdApi,
  checkUserApi,
  contactUsApi,
  getProfileApi,
  profileChangeRequestApi,
  profileReqListApi,
} from "../api";
import {
  VerifyUserFailure,
  VerifyUserSuccess,
  batchCancelFailure,
  batchCancelSuccess,
  batchChangeReqFailure,
  batchChangeReqListFailure,
  batchChangeReqListSuccess,
  batchChangeReqSuccess,
  changepwdFailure,
  changepwdSuccess,
  contactusFailure,
  contactusSuccess,
  getAllbatchFailure,
  getAllbatchSuccess,
  getProfileFailure,
  getProfileInfoSuccess,
  profileChangeReqFailure,
  profileChangeReqListFailure,
  profileChangeReqListSuccess,
  profileChangeReqSuccess,
} from "../actions/auth.action";
import {
  BATCH_CANCEL,
  BATCH_CHANGE_REQ,
  BATCH_CHANGE_REQ_LIST,
  CHANGE_PASSWORD,
  CHECK_USER,
  GET_BATCH_LIST,
  GET_PROFILE_INFO,
  PROFILE_CHANGE_LIST,
  PROFILE_CHANGE_REQ,
  SUBMIT_QUERY,
} from "../storeType";
import toast from "react-hot-toast";

function* checkUserSaga(action) {
  try {
    const response = yield call(checkUserApi, action?.payload);
    if (response?.data) {
      yield put(VerifyUserSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response?.data);
      }
    }
  } catch (error) {
    if (action?.callback) {
      action?.callback(error);
    }
    yield put(VerifyUserFailure(error));
    if (error?.response?.data?.data)
      toast.error(error?.response?.data?.data?.message);
  }
}
function* getProfileInfoSaga(action) {
  try {
    console.log("saga");

    const response = yield call(getProfileApi, action?.payload);
    if (response?.data) {
      yield put(getProfileInfoSuccess(response?.data));
    }
  } catch (error) {
    yield put(getProfileFailure(error));
  }
}
function* changepwdSaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(changepwdApi, action?.payload);
    if (response?.data) {
      yield put(changepwdSuccess(response?.data));
      toast.success("password change successfully!");
      window?.location?.replace("/login");
    }
  } catch (error) {
    console.log("------error", error);
    yield put(changepwdFailure(error?.response?.data?.data));
    toast.error(error?.response?.data?.data);
  }
}
function* contactUsSaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(contactUsApi, action?.payload);
    if (response?.data) {
      yield put(contactusSuccess(response?.data));
      toast.success("form submitted successfully!");
    }
  } catch (error) {
    console.log("------error", error);
    yield put(contactusFailure(error?.response?.data?.data));
    toast.error(error?.response?.data?.data);
  }
}
function* ProfileChnageReqSaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(profileChangeRequestApi, action?.payload);
    if (response?.data) {
      yield put(profileChangeReqSuccess(response?.data));
      toast.success(response?.data?.data);
    }
  } catch (error) {
    console.log("------error", error);
    yield put(profileChangeReqFailure(error?.response?.data?.data));
    // toast.error(error?.response?.data?.data);
  }
}
function* ProfileChnageHistorySaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(profileReqListApi, action?.payload);
    if (response?.data) {
      yield put(profileChangeReqListSuccess(response?.data));
      // toast.success(response?.data?.data);
    }
  } catch (error) {
    console.log("------error", error);
    yield put(profileChangeReqListFailure(error?.response?.data?.data));
    // toast.error(error?.response?.data?.data);
  }
}
function* batchListSaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(batchListApi, action?.payload);
    if (response?.data) {
      yield put(getAllbatchSuccess(response?.data));
      // toast.success(response?.data?.data);
    }
  } catch (error) {
    console.log("------error", error);
    yield put(getAllbatchFailure(error?.response?.data?.data));
    // toast.error(error?.response?.data?.data);
  }
}
function* batchChangeReqSaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(batchChangeReqApi, action?.payload);
    if (response?.data) {
      yield put(batchChangeReqSuccess(response?.data));
      // toast.success(response?.data?.data);
    }
  } catch (error) {
    console.log("------error", error);
    yield put(batchChangeReqFailure(error?.response?.data?.data));
    // toast.error(error?.response?.data?.data);
  }
}
function* batchChangeReqListSaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(batchChangeListApi, action?.payload);
    if (response?.data) {
      yield put(batchChangeReqListSuccess(response?.data));
      // toast.success(response?.data?.data);
    }
  } catch (error) {
    console.log("------error", error);
    yield put(batchChangeReqListFailure(error?.response?.data?.data));
    // toast.error(error?.response?.data?.data);
  }
}
function* batchCancelReqSaga(action) {
  try {
    console.log("saga", action?.payload);

    const response = yield call(cancelBatchChangeApi, action?.payload);
    if (response?.data) {
      yield put(batchCancelSuccess(response?.data));
      // toast.success(response?.data?.data);
    }
  } catch (error) {
    console.log("------error", error);
    yield put(batchCancelFailure(error?.response?.data?.data));
    // toast.error(error?.response?.data?.data);
  }
}

export function* authSaga() {
  yield takeLatest(CHECK_USER, checkUserSaga);
  yield takeLatest(GET_PROFILE_INFO, getProfileInfoSaga);
  yield takeLatest(CHANGE_PASSWORD, changepwdSaga);
  yield takeLatest(SUBMIT_QUERY, contactUsSaga);
  yield takeLatest(PROFILE_CHANGE_REQ, ProfileChnageReqSaga);
  yield takeLatest(PROFILE_CHANGE_LIST, ProfileChnageHistorySaga);
  yield takeLatest(GET_BATCH_LIST, batchListSaga);
  yield takeLatest(BATCH_CHANGE_REQ, batchChangeReqSaga);
  yield takeLatest(BATCH_CHANGE_REQ_LIST, batchChangeReqListSaga);
  yield takeLatest(BATCH_CANCEL, batchCancelReqSaga);
}
