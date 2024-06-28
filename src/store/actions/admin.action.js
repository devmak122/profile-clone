import { CHECK_AND_UPDATE, CHECK_AND_UPDATE_FAILURE, CHECK_AND_UPDATE_SUCCESS, ENTER_BASIC_DETAILS, ENTER_BASIC_DETAILS_FAILURE, ENTER_BASIC_DETAILS_SUCCESS, INITIATE_PAYMENT, INITIATE_PAYMENT_FAILURE, INITIATE_PAYMENT_SUCCESS, SUBMIT_KYC_INFO, SUBMIT_KYC_INFO_FAILURE, SUBMIT_KYC_INFO_SUCCESS, VALDATE_REGISTRATION, VALDATE_REGISTRATION_FAILURE, VALDATE_REGISTRATION_SUCCESS } from "../storeType";

// step-1 user ONBOARDING
export const enterBasicDetails = (payload, callback) => {
  console.log("herecheck678");
  return {
    type: ENTER_BASIC_DETAILS,
    payload: payload,
    callback,
  };
};
export const enterBasicDetailsSuccess = (payload) => {
  return {
    type: ENTER_BASIC_DETAILS_SUCCESS,
    payload: payload,
  };
};
export const enterBasicDetailsFailure = (payload) => {
  return {
    type: ENTER_BASIC_DETAILS_FAILURE,
    payload: payload,
  };
};

// step-2 user ONBOARDING
export const validateRegistrationOtp = (payload, callback) => {
  console.log("herecheck678");
  return {
    type: VALDATE_REGISTRATION,
    payload: payload,
    callback,
  };
};
export const validateRegistrationOtpSuccess = (payload) => {
  return {
    type: VALDATE_REGISTRATION_SUCCESS,
    payload: payload,
  };
};
export const validateRegistrationOtpFailure = (payload) => {
  return {
    type: VALDATE_REGISTRATION_FAILURE,
    payload: payload,
  };
};

// step-3 user ONBOARDING
export const initiatePayment = (payload, callback) => {
  console.log("herecheck678");
  return {
    type: INITIATE_PAYMENT,
    payload: payload,
    callback,
  };
};
export const initiatePaymentSuccess = (payload) => {
  return {
    type: INITIATE_PAYMENT_SUCCESS,
    payload: payload,
  };
};
export const initiatePaymentFailure = (payload) => {
  return {
    type: INITIATE_PAYMENT_FAILURE,
    payload: payload,
  };
};

// step-4 user ONBOARDING

export const checkAndUpdate = (payload, callback) => {
  console.log("herecheck678");
  return {
    type: CHECK_AND_UPDATE,
    payload: payload,
    callback,
  };
};
export const checkAndUpdateSuccess = (payload) => {
  return {
    type: CHECK_AND_UPDATE_SUCCESS,
    payload: payload,
  };
};
export const checkAndUpdateFailure = (payload) => {
  return {
    type: CHECK_AND_UPDATE_FAILURE,
    payload: payload,
  };
};

// step-5 user ONBOARDING
export const submitKycinfo = (payload, callback) => {
  console.log("herecheck678");
  return {
    type: SUBMIT_KYC_INFO,
    payload: payload,
    callback,
  };
};
export const submitKycinfoSuccess = (payload) => {
  return {
    type: SUBMIT_KYC_INFO_SUCCESS,
    payload: payload,
  };
};
export const submitKycinfoFailure = (payload) => {
  return {
    type: SUBMIT_KYC_INFO_FAILURE,
    payload: payload,
  };
};
