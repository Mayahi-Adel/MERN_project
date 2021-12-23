import api from "./api";

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

const userListener = async () => {
  return await api.get("/jwtid", { withCredentials: true });
};

export { signin, signup, userListener };
