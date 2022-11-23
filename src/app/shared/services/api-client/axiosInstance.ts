import axios from 'axios';

const API_URL = 'https://accommodationsinternship-default-rtdb.europe-west1.firebasedatabase.app/';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.location.href = '/sign-in';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
