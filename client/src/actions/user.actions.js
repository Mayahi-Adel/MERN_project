import { getUserById, updateBiography, uploadFile } from "../services";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";

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

export const updateBio = (id, bio) => {
  return async (dispatch) => {
    try {
      await updateBiography(id, bio);
      dispatch({ type: UPDATE_BIO, payload: bio });
    } catch (err) {
      console.log(err);
    }
  };
};
