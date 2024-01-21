import axios from "axios";

const ApiVersion = "api/v0";

export const axiosBackInstance = axios.create({
  baseURL: `http://localhost:8080/${ApiVersion}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
