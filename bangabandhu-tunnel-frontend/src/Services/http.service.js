import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.0.117:4000/api/v1/",
  timeout: 10000,
  headers: {
    token: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const public_api = axios.create({
  baseURL: "http://192.168.0.117:4000/api/v1/",
  timeout: 10000,
});

export const public_api_test = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000, //max response time in mile second
});
