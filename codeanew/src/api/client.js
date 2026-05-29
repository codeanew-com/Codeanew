import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_DIRECTUS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.errors?.[0]?.message ||
      error.message ||
      "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export default client;
