import axios from 'axios'

// Axios Instance | in production set baseURL to server host url
export const axiosInstance =axios.create({
    baseURL: "http://localhost:8800/store/"
})