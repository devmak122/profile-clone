import NetworkClient from "./NetworkClient";

export const getAllgalaryApi = (payload) => {
  return NetworkClient?.post("gallery/getAllGallery", payload);
};

export const getAllBlogsApi = (payload) => {
  return NetworkClient?.post("blog/getAllBlogs", payload);
};

export const getBlogByIdApi = ({ id }) => {
  //rudf4zn65l.execute-api.ap-south-1.amazonaws.com/dev/blog/getBlogDetails?blogId=d913bdd9-018f-1000-8d96-57f937fe6da5
  //rudf4zn65l.execute-api.ap-south-1.amazonaws.com/dev/blog/getBlogDetails?blogId=d913bdd9-018f-1000-8d96-57f937fe6da5
  return NetworkClient?.get(`blog/getBlogDetails?blogId=${id}`);
};
export const SubscribeApi = (payload) => {
  return NetworkClient?.post("emailSubscribe/subscribe", payload);
};

export const checkUserApi = (payload) => {
  return NetworkClient?.post("auth/student/login", payload);
};
export const getProfileApi = () => {
  console.log("api call");
  return NetworkClient?.get("managerUser/student/getProfileDetails");
};
export const alleventsApi = (payload) => {
  return NetworkClient?.post("event/getAllEvents", payload);
};
export const geteventbyIdApi = (id) => {
  return NetworkClient?.get(`event/getEventDetails?eventId=${id}`);
};
export const changepwdApi = (payload) => {
  console.log("payload", payload);
  return NetworkClient?.post("managerUser/student/changePassword", payload);
};
export const contactUsApi = (payload) => {
  return NetworkClient?.post("contact-us/submitQuery", payload);
};
export const profileChangeRequestApi = (payload) => {
  return NetworkClient?.post(
    "managerUser/student/profileChangeRequest",
    payload
  );
};

export const profileReqListApi = (payload) => {
  return NetworkClient?.post(
    "managerUser/student/myProfileUpdateRequestList",
    payload
  );
};
export const batchListApi = () => {
  return NetworkClient?.post("managerUser/student/getBatchList");
};
export const batchChangeReqApi = (payload) => {
  return NetworkClient?.post("managerUser/student/batchChangeRequest", payload);
};
export const batchChangeListApi = (payload) => {
  return NetworkClient?.post(
    "managerUser/student/myBatchUpdateRequestList",
    payload
  );
};
export const cancelBatchChangeApi = (payload) => {
  return NetworkClient?.post("managerUser/student/batchChangeRequest", payload);
};

export const getAllTestimonialsApi = (payload) => {
  return NetworkClient?.post(
    "managerUser/student/getAvailableTestimonials",
    payload
  );
};

export const eventBookApi = (payload) => {
  console.log(payload);
  return NetworkClient?.post("managerUser/student/initiatePayment", payload);
};
export const addTestiimonialApi = (payload) => {
  return NetworkClient?.post("managerUser/student/submitTestimonial", payload);
};
export const getAllPlansApi = () => {
  return NetworkClient?.get("managePlan/getAllSubscriptionPlan");
};
export const updatestatusEventApi = (payload) => {
  console.log(payload, "successorder");
  return NetworkClient?.get(
    `managerUser/student/updateOrderStatus?orderId=${payload}`
  );
};

export const getSignedUrlApi = (payload) => {
  return NetworkClient?.get(
    `getSignedUrl?mediaType=${payload?.media}&fileName=${payload?.name}`
  );
};
export const uploadmediaApi = (payload) => {
  return NetworkClient?.put("");
};
export const enterBasicDetailsApi = (payload) => {
  console.log(payload);
  return NetworkClient?.post("auth/student/login", payload);
};

export const validateRegistrationOtpApi = (payload) => {
  console.log(payload);
  return NetworkClient?.post("auth/student/login", payload);
};

export const initiatePaymentApi = (payload) => {
  console.log(payload);
  return NetworkClient?.post("auth/student/login", payload);
};

export const checkAndUpdateApi = (payload) => {
  console.log(payload);
  return NetworkClient?.post("auth/student/login", payload);
};

export const submitKycinfoApi = (payload) => {
  console.log(payload);
  return NetworkClient?.post("managerUser/student/submitKyc", payload);
};