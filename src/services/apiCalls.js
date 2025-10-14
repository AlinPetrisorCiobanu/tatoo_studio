import axios from "axios";

const URL_USER = "https://tatto-studio-backend.vercel.app/"

//users login
export const login = (data) => {
  return axios
    .post(`${URL_USER}login`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

//users register
export const register = (data) => {
  console.log(data)
  return axios
    .post(`${URL_USER}register`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};