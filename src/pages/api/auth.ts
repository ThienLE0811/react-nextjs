import axios, { AxiosError } from "axios";

const baseUrl = "https://reqres.in";

export const loginApi = async (values: any) => {
  try {
    const res = await axios.post(`${baseUrl}/api/login`, values);
    console.log("res 2:: ", res);
    if (res) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  } catch (error) {
    const err = error as AxiosError;
    console.log("error:: ", err?.response?.data);
    return err?.response?.data;
  }
};
