import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://gmach.onrender.com/api',
    // baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const excludedPaths = ['/users/login', '/users/createUser'];

        if (!excludedPaths.includes(config.url)) {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;