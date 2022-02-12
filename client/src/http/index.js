import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
})

export const sendOtp = (data) => api.post(`/api/send-otp`,data)
export const verifyOtp = (data) => api.post(`/api/verify-otp`,data)
export const refreshToken = ()=> api.get(`/api/refresh`)

export default api