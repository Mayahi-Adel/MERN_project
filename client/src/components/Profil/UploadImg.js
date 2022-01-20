import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

function UploadImg() {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const handlePicture = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", userData?.pseudo);
    data.append("userId", userData?._id);
    data.append("file", file);

    dispatch(uploadPicture(data, userData?._id));
  };

  return (
    <form onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer d'image</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ display: "none" }}
      />
      <br />
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default UploadImg;
