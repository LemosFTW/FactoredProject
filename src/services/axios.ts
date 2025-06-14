import axios from 'axios';
const baseURL = "https://www.swapi.tech/api";

export function get(url: string, params?: any) {
  return axios.get(`${baseURL}${url}`, { params });
}
export function post(url: string, data?: any) {
    return axios.post(`${baseURL}${url}`, data);
}