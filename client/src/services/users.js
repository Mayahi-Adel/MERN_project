import api from "./api";

const getUserById = async (uid) => {
  return await api.get(`/user/${uid}`);
};

const uploadFile = async (data) => {
  return await api.post(`/user/upload`, data);
};

export { getUserById, uploadFile };
