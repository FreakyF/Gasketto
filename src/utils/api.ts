import axios from 'axios';

const BASE_URL = 'http://192.168.33.102:3004';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const endpoints = {
  login: '/auth',
  repairs: '/repairs',
};
