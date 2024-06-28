// step-1

import { call, put, takeLatest } from "redux-saga/effects";
import {
  checkAndUpdateFailure,
  checkAndUpdateSuccess,
  enterBasicDetailsFailure,
  enterBasicDetailsSuccess,
  initiatePaymentFailure,
  initiatePaymentSuccess,
  submitKycinfoFailure,
  submitKycinfoSuccess,
  validateRegistrationOtpFailure,
  validateRegistrationOtpSuccess,
} from "../actions/admin.action";
import {
  checkAndUpdateApi,
  enterBasicDetailsApi,
  initiatePaymentApi,
  submitKycinfoApi,
  validateRegistrationOtpApi,
} from "../api";
import toast from "react-hot-toast";
import {
  CHECK_AND_UPDATE,
  ENTER_BASIC_DETAILS,
  INITIATE_PAYMENT,
  SUBMIT_KYC_INFO,
  VALDATE_REGISTRATION,
} from "../storeType";

function* enterBasicDetailsSaga(action) {
  try {
    const response = yield call(enterBasicDetailsApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(enterBasicDetailsSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(enterBasicDetailsFailure(error));
    toast.error(error?.response?.data?.data);
  }
}
//step-2

function* validateregistrationOtpSaga(action) {
  try {
    const response = yield call(validateRegistrationOtpApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(validateRegistrationOtpSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(validateRegistrationOtpFailure(error));
    toast.error(error?.response?.data?.data);
  }
}

//step-3

function* intiatePaymentSaga(action) {
  try {
    const response = yield call(initiatePaymentApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(initiatePaymentSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(initiatePaymentFailure(error));
    toast.error(error?.response?.data?.data);
  }
}

//step-4

function* checkAndUpdateSaga(action) {
  try {
    const response = yield call(checkAndUpdateApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(checkAndUpdateSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(checkAndUpdateFailure(error));
    toast.error(error?.response?.data?.data);
  }
}

//step-5

function* submitKycinfoSaga(action) {
  try {
    const response = yield call(submitKycinfoApi, action?.payload);
    if (response?.data) {
      console.log(response?.data);
      yield put(submitKycinfoSuccess(response?.data));
      if (action?.callback) {
        action?.callback(response);
      }
    }
  } catch (error) {
    yield put(submitKycinfoFailure(error));
    toast.error(error?.response?.data?.data);
  }
}

export function* adminSaga() {
  yield takeLatest(ENTER_BASIC_DETAILS, enterBasicDetailsSaga);
  yield takeLatest(VALDATE_REGISTRATION, validateregistrationOtpSaga);
  yield takeLatest(INITIATE_PAYMENT, intiatePaymentSaga);
  yield takeLatest(CHECK_AND_UPDATE, checkAndUpdateSaga);
  yield takeLatest(SUBMIT_KYC_INFO, submitKycinfoSaga);
}
