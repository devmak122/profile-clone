// store/api.js
export const fetchJobsApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require("../jobListings.json")); // Use the dummy JSON data
    }, 2000);
  });
};
