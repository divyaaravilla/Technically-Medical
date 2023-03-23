import axios from "axios";
import { baseUrl } from "../url";

const getUrl = baseUrl + "/api/users";
const appointedUrl = baseUrl + "/api/appointments";
const postUrl = baseUrl + "/api/create";
const updateUrl = baseUrl + "/api/user/";

// get all users info
export const getUsers = async () => {
  const response = await axios.get(getUrl);
  return response;
};

// get appointed users info
export const getAppointment = async () => {
  const response = await axios.get(appointedUrl);
  return response;
};

// post user info to backend
export const postUser = async (user) => {
  const response = await axios.post(postUrl, user);
  console.log(response.data);
};

// post user info and get updated info
export const updateUser = async (id, user) => {
  const response = await axios.put(updateUrl + id, user);
  console.log("updated Data", response.data);
};

// post user's id to delete
export const deleteUser = async (id) => {
  const response = await axios.delete(updateUrl + id);
  console.log(response);
};
