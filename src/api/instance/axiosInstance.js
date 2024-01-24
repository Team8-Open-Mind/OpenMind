import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 2000,
  timeoutErrorMessage: 'Request Timeout over 2 seconds.',
});

export default axiosInstance;
