import api from "./api";

const getUserById = async (uid) => {
  return await api.get(`/user/${uid}`);
};

export default getUserById;
