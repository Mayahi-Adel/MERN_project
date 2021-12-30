import { getAllPosts, like_post, unlike_post } from "../services";

//posts
export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

export const getPosts = (count) => {
  return async (dispatch) => {
    try {
      const posts = await await getAllPosts();
      const array = posts.data.slice(0, count);
      dispatch({ type: GET_POSTS, payload: array });
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

export const unlikePost = (postId, userId) => {
  return async (dispatch) => {
    try {
      await unlike_post(postId, userId);
      dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
    } catch (err) {
      console.log(err);
    }
  };
};
