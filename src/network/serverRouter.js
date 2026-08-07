import axios from "axios";
import { BASE_URL } from "../constants/appConstants";

export const publicRouter = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});
