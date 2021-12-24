import api from "./api";
import getUserById from "./users";

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

export { signin, signup, userLogout, userListener, getUserById };
