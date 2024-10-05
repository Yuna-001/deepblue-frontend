import axios from "axios";

export const get = async (url: string, params?: Record<string, any>) => {
  const response = await axios.get(url, { params });

  return response.data;
};

export const post = async (url: string, data: any) => {
  const response = await axios.post(url, data);

  return response.data;
};

export const patch = async (url: string, data: any) => {
  const response = await axios.patch(url, data);

  return response.data;
};

export const put = async (url: string, data: any) => {
  const response = await axios.put(url, data);

  return response.data;
};
