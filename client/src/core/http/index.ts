import axios from 'axios';
import type { AuthResponse } from '@/core/models/response/AuthResponse';

export const API_URL = `http://localhost:3000/api`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default $api;
