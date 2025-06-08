import axios from "axios";

export let url = "https://charcha-app-server.onrender.com";

export const axiosInstance = axios.create({
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
