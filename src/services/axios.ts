import axios from "axios";
const baseURL = "https://www.swapi.tech/api";

export async function get(url: string, params?: any) {
  return axios.get(`${baseURL}${url}`, { params });
}
export async function post(url: string, data?: any) {
  return axios.post(`${baseURL}${url}`, data);
}
