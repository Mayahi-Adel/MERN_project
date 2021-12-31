import {
  delete_post,
  getAllPosts,
  like_post,
  unlike_post,
  update_post,
} from "../services";

//posts
export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

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

export const updatePost = (postId, message) => {
  return async (dispatch) => {
    try {
      await update_post(postId, message);
      dispatch({ type: UPDATE_POST, payload: { postId, message } });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await delete_post(postId);
      dispatch({ type: DELETE_POST, payload: { postId } });
    } catch (err) {
      console.log(err);
    }
  };
};
