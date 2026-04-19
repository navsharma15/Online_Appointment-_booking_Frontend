import axios from 'axios';

const rawEnvUrl = import.meta.env.VITE_API_URL;
const apiUrl = rawEnvUrl 
    ? (rawEnvUrl.endsWith('/api') ? rawEnvUrl : `${rawEnvUrl}/api`)
    : 'http://localhost:5000/api';

const API = axios.create({
    baseURL: apiUrl,
});

// Interceptor to add token to requests
API.interceptors.request.use((req) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user && user.token) {
        req.headers.Authorization = `Bearer ${user.token}`;
    }
    return req;
});

export default API;