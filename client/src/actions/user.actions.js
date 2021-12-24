import { getUserById } from "../services";

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const data = await getUserById(uid);
      dispatch({ type: GET_USER, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};
