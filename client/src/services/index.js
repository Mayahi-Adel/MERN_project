import api from "./api";
import {
  getUserById,
  uploadFile,
  updateBiography,
  getAllUsers,
  follow_user,
  unfollow_user,
} from "./users";

import { getAllPosts, like_post, unlike_post } from "./posts";

const signin = async (email, password) => {
  return await api.post(
    "/user/login",
    { email, password },
    { withCredentials: true }
  );
};

const signup = async (pseudo, email, password) => {
  return await api.post("/user/register", {
    pseudo,
    email,
    password,
  });
};

const userLogout = async () => {
  return await api.get("/user/logout", { withCredentials: true });
};

const userListener = async () => {
  return await api.get("/jwtid", { withCredentials: true });
};

export {
  signin,
  signup,
  userLogout,
  userListener,
  getUserById,
  uploadFile,
  updateBiography,
  getAllUsers,
  follow_user,
  unfollow_user,
  getAllPosts,
  like_post,
  unlike_post,
};
