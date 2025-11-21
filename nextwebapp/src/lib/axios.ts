// lib/axios.ts
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Basic error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            return Promise.reject(new Error("Network error"));
        }

        if (error.response.status === 401) {
            console.warn("User is unauthorized");
        }

        return Promise.reject(error);
    }
);

export default api;
