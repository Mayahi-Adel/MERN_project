import api from "./api";

const getUserById = async (uid) => {
  return await api.get(`/user/${uid}`);
};

const uploadFile = async (data) => {
  return await api.post(`/user/upload`, data);
};

const updateBiography = async (id, bio) => {
  return await api.put(`/user/${id}`, { bio });
};

export { getUserById, uploadFile, updateBiography };
