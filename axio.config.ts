import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    /**
     * Get the token from local storage
     */
    const user = localStorage.getItem("user")!;
    const token = JSON.parse(user).data.token;

    /**
     * Check if the request is not the login request
     */

    if (token && !config.url?.includes("/login")) {
      /**
       * Add the token to the Authorization header
       */
      config.headers = AxiosHeaders.from(
        config.headers
      ); /****Convert existing headers to AxiosHeaders****/
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => {
    /**
     * Handle request error here
     */
    return Promise.reject(error);
  }
);

export default instance;
