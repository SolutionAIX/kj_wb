// src/api/axios.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000/api";

const axiosPublicInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

const axiosPrivateInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosPrivateInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export { axiosPublicInstance, axiosPrivateInstance };