/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import toast from "react-hot-toast";

class NetworkClient {
  constructor() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let service = axios.create({
      headers,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);

    service.interceptors.request.use(async (config) => {
      const token = localStorage.getItem("token");
      console.log("====================================");
      console.log("token", token);
      console.log("====================================");
      if (token) {
        config.headers["Authorization"] = token;
      }
      config.baseURL =
        "https://rudf4zn65l.execute-api.ap-south-1.amazonaws.com/dev/";
      return config;
    });

    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = async (error) => {
    console.log("error -----", error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      toast?.error("You are not authorized. Logging out...");
      localStorage.clear("");
      window.location.replace("/login");
    }

    return Promise.reject(error);
  };

  get(path, headers) {
    return this.service.get(path, { headers }).then((response) => response);
  }

  patch(path, payload, headers) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload,
        headers: headers,
      })
      .then((response) => response);
  }

  post(path, payload, headers) {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: headers,
      })
      .then((response) => response);
  }

  delete(path, payload, headers) {
    return this.service
      .request({
        method: "DELETE",
        url: path,
        responseType: "json",
        data: payload,
        headers: headers,
      })
      .then((response) => response);
  }

  put(path, payload, headers) {
    return this.service
      .request({
        method: "PUT",
        url: path,
        responseType: "json",
        data: payload,
        headers: headers,
      })
      .then((response) => response);
  }
}

export default new NetworkClient();
