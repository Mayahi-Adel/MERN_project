import api from "./api";

const getAllPosts = async () => {
  return await api.get("/post");
};

export { getAllPosts };
