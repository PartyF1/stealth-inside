import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL: "http://localhost:3001",
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token") || "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
    } else if (error.response && error.response.status === 500) {
      return Promise.reject(error.response);
    } else return Promise.reject(error);
  }
);

export default api;
