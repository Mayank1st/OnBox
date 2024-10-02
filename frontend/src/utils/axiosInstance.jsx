import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://onbox-1.onrender.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
