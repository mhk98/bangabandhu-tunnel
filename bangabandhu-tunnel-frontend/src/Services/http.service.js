import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.117:4000/api/v1/',
  timeout: 10000,
  headers: {
    token: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const public_api = axios.create({
  baseURL: 'http://192.168.0.117:4000/api/v1/',
  timeout: 10000,
});
