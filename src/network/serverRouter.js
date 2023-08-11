import axios from "axios";
import { BASE_URL } from "../constants/appConstants";

export const publicRouter = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
