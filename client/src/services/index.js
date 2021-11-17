import api from "./api";

const signin = async (email, password) => {
  return await api.post("/user/login", { email, password });
};

const signup = async (firstname, lastname, email, password, role) => {
  return await api.post("/registration", {
    firstname,
    lastname,
    email,
    password,
    role,
  });
};

export { signin, signup };
