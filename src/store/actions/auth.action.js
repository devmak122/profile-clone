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
  SUBMIT_QUERY,
  SUBMIT_QUERY_FAILURE,
  SUBMIT_QUERY_SUCCESS,
} from "../storeType";

export const VerifyUserAct = (payload, callback) => {
  return {
    type: CHECK_USER,
    payload: payload,
    callback,
  };
};
export const VerifyUserSuccess = (payload) => {
  return {
    type: CHECK_USER_SUCCESS,
    payload: payload,
  };
};
export const VerifyUserFailure = (payload) => {
  return {
    type: CHECK_USER_FAILURE,
    payload: payload,
  };
};
export const getProfileInfo = () => {
  console.log("action");
  return {
    type: GET_PROFILE_INFO,
  };
};
export const getProfileInfoSuccess = (payload) => {
  return {
    type: GET_PROFILE_INFO_SUCCESS,
    payload: payload,
  };
};
export const getProfileFailure = (payload) => {
  return {
    type: GET_PROFILE_INFO_FAILURE,
    payload: payload,
  };
};
export const changepwd = (payload) => {
  console.log("action");
  return {
    type: CHANGE_PASSWORD,
    payload: payload,
  };
};
export const changepwdSuccess = (payload) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: payload,
  };
};
export const changepwdFailure = (payload) => {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: payload,
  };
};
export const contactus = (payload) => {
  console.log("action");
  return {
    type: SUBMIT_QUERY,
    payload: payload,
  };
};
export const contactusSuccess = (payload) => {
  return {
    type: SUBMIT_QUERY_SUCCESS,
    payload: payload,
  };
};
export const contactusFailure = (payload) => {
  return {
    type: SUBMIT_QUERY_FAILURE,
    payload: payload,
  };
};

export const profileChangeReq = (payload) => {
  return {
    type: PROFILE_CHANGE_REQ,
    payload: payload,
  };
};
export const profileChangeReqSuccess = (payload) => {
  return {
    type: PROFILE_CHANGE_REQ_SUCCESS,
    payload: payload,
  };
};
export const profileChangeReqFailure = (payload) => {
  return {
    type: PROFILE_CHANGE_REQ_FAILURE,
    payload: payload,
  };
};
export const profileChangeReqList = (payload) => {
  return {
    type: PROFILE_CHANGE_LIST,
    payload: payload,
  };
};
export const profileChangeReqListSuccess = (payload) => {
  return {
    type: PROFILE_CHANGE_LIST_SUCCESS,
    payload: payload,
  };
};
export const profileChangeReqListFailure = (payload) => {
  return {
    type: PROFILE_CHANGE_LIST_FAILURE,
    payload: payload,
  };
};
export const getAllBatches = (payload) => {
  return {
    type: GET_BATCH_LIST,
    payload: payload,
  };
};
export const getAllbatchSuccess = (payload) => {
  return {
    type: GET_BATCH_LIST_SUCCESS,
    payload: payload,
  };
};
export const getAllbatchFailure = (payload) => {
  return {
    type: GET_BATCH_LIST_FAILURE,
    payload: payload,
  };
};
export const batchChangeReq = (payload) => {
  return {
    type: BATCH_CHANGE_REQ,
    payload: payload,
  };
};
export const batchChangeReqSuccess = (payload) => {
  return {
    type: BATCH_CHANGE_REQ_SUCCESS,
    payload: payload,
  };
};
export const batchChangeReqFailure = (payload) => {
  return {
    type: BATCH_CHANGE_REQ_FAILURE,
    payload: payload,
  };
};
export const batchChangeReqList = (payload) => {
  return {
    type: BATCH_CHANGE_REQ_LIST,
    payload: payload,
  };
};
export const batchChangeReqListSuccess = (payload) => {
  return {
    type: BATCH_CHANGE_REQ_LIST_SUCCESS,
    payload: payload,
  };
};
export const batchChangeReqListFailure = (payload) => {
  return {
    type: BATCH_CHANGE_REQ_LIST_FAILURE,
    payload: payload,
  };
};
export const batchCancel = (payload) => {
  return {
    type: BATCH_CANCEL,
    payload: payload,
  };
};
export const batchCancelSuccess = (payload) => {
  return {
    type: BATCH_CANCEL_SUCCESS,
    payload: payload,
  };
};
export const batchCancelFailure = (payload) => {
  return {
    type: BATCH_CANCEL_FAILURE,
    payload: payload,
  };
};
