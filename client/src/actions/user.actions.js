import { getUserById, uploadFile } from "../services";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const user = await getUserById(uid);
      dispatch({ type: GET_USER, payload: user });
    } catch (err) {
      console.log(err);
    }
  };
};

export const uploadPicture = (data, id) => {
  return async (dispatch) => {
    try {
      await uploadFile(data);
      const user = await getUserById(id);
      dispatch({ type: UPLOAD_PICTURE, payload: user?.data?.picture });
    } catch (err) {
      console.log(err);
    }
  };
};
