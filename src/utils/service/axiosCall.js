import axios from "axios";
import { baseUrl } from "./api";
const userInfo = JSON.parse(sessionStorage.getItem("user"));
export const postApi = async (data, url) => {
  const res = await axios.post(`${baseUrl}${url}`, data, {
    headers: {
      // access_token: userInfo?.token,
    },
  });
  return res.data;
};
export const putApi = async (data, url) => {
  const res = await axios.put(`${baseUrl}${url}`, data, {
    headers: {
      // access_token: userInfo?.token,
    },
  });
  return res.data;
};
export const getApi = async (url) => {
  const res = await axios.get(`${baseUrl}${url}`, {
    headers: {
      // access_token: userInfo?.token,
    },
  });
  return res.data;
};
export const deleteApi = async (url) => {
  const res = await axios.delete(`${baseUrl}${url}`, {
    headers: {
      // access_token: userInfo?.token,
    },
  });
  return res.data;
};


