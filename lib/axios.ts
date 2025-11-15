import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // Referer: 'https://jsonplaceholder.typicode.com',
    // Origin: 'https://jsonplaceholder.typicode.com',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);
