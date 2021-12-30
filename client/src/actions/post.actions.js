import { getAllPosts, like_post } from "../services";

//posts
export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await await getAllPosts();

      dispatch({ type: GET_POSTS, payload: posts.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const likePost = (postId, userId) => {
  return async (dispatch) => {
    try {
      await like_post(postId, userId);
      dispatch({ type: LIKE_POST, payload: { postId, userId } });
    } catch (err) {
      console.log(err);
    }
  };
};
