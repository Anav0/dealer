import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    /* other custom settings */
});

export default axiosInstance;