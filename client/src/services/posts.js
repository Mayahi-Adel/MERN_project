import api from "./api";

const getAllPosts = async () => {
  return await api.get("/post");
};

const like_post = async (postId, userId) => {
  return await api.patch(`/post/like/${postId}`, { idLiker: userId });
};

const unlike_post = async (postId, userId) => {
  return await api.patch(`/post/unlike/${postId}`, { idLiker: userId });
};

const update_post = async (postId, message) => {
  return await api.put(`/post/${postId}`, { message });
};

const delete_post = async (postId) => {
  return api.delete(`post/${postId}`);
};

export { getAllPosts, like_post, unlike_post, update_post, delete_post };
