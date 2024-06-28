import {
  CHECK_AND_UPDATE,
  CHECK_AND_UPDATE_FAILURE,
  CHECK_AND_UPDATE_SUCCESS,
  ENTER_BASIC_DETAILS,
  ENTER_BASIC_DETAILS_FAILURE,
  ENTER_BASIC_DETAILS_SUCCESS,
  INITIATE_PAYMENT,
  INITIATE_PAYMENT_FAILURE,
  INITIATE_PAYMENT_SUCCESS,
  SUBMIT_KYC_INFO,
  SUBMIT_KYC_INFO_FAILURE,
  SUBMIT_KYC_INFO_SUCCESS,
  VALDATE_REGISTRATION,
  VALDATE_REGISTRATION_FAILURE,
  VALDATE_REGISTRATION_SUCCESS,
} from "../storeType";

const initialstate = {
  pwderror: null,
  basicdetails: null,
  paymentplan: null,
  checkkycotp: null,
  kycsubmit: null,
  checkref: null,
};
const adminReducer = (state = initialstate, action) => {
  switch (action.type) {
    // step-1
    case ENTER_BASIC_DETAILS:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case ENTER_BASIC_DETAILS_SUCCESS:
      return {
        ...state,
        loader: false,
        basicdetails: action?.payload,
      };
    case ENTER_BASIC_DETAILS_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };

    // step-2
    case VALDATE_REGISTRATION:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case VALDATE_REGISTRATION_SUCCESS:
      return {
        ...state,
        loader: false,
        checkkycotp: action?.payload,
      };
    case VALDATE_REGISTRATION_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };

    // step-3

    case INITIATE_PAYMENT:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case INITIATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loader: false,
        paymentplan: action?.payload,
      };
    case INITIATE_PAYMENT_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    // step-4
    case CHECK_AND_UPDATE:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case CHECK_AND_UPDATE_SUCCESS:
      return {
        ...state,
        loader: false,
        checkref: action?.payload,
      };
    case CHECK_AND_UPDATE_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    // step-5

    case SUBMIT_KYC_INFO:
      console.log("test reducer");
      return {
        ...state,
        loader: true,
      };
    case SUBMIT_KYC_INFO_SUCCESS:
      return {
        ...state,
        loader: false,
        kycsubmit: action?.payload,
      };
    case SUBMIT_KYC_INFO_FAILURE:
      return {
        ...state,
        loader: false,
        pwderror: action?.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
