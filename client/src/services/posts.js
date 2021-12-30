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

export { getAllPosts, like_post, unlike_post };
