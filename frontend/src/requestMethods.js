import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

// For future use with JWT/Auth
export const userRequest = axios.create({
    baseURL: BASE_URL,
});
