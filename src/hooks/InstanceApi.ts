import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `https://www.themealdb.com/api/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
