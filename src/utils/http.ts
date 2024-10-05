import axios from "axios";

const api = axios.create({
  baseURL: "https://api.diver-deepblue.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url: string, params?: Record<string, any>) => {
  const response = await api.get(url, {
    params,
  });

  return response.data;
};

export const post = async (url: string, data: any) => {
  const response = await api.post(url, data);

  return response.data;
};

export const patch = async (url: string, data: any) => {
  const response = await api.patch(url, data);

  return response.data;
};

export const put = async (url: string, data: any) => {
  const response = await api.put(url, data);

  return response.data;
};
