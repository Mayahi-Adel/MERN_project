import { getAllPosts } from "../services";

//posts
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await getAllPosts();
      dispatch({ type: GET_POSTS, payload: posts });
    } catch (err) {
      console.log(err);
    }
  };
};
