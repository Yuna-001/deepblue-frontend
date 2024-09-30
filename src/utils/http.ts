import axios from "axios";

const api = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url: string) => {
  const response = await api.get(url);

  return response.data;
};

export const post = async (url: string, data: any) => {
  console.log(data);
  const response = await api.post(url, data);

  return response.data;
};
