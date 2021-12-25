import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useSelector, useDispatch } from "react-redux";
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/user.actions";

function UpdateProfil() {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer?.data);
  const dispatch = useDispatch();

  const handleUpdateBio = () => {
    dispatch(updateBio(userData?._id, bio));
    setUpdateForm(false);
  };

  return (
    <>
      <LeftNav active="profil" />
      <div className="profil__title">
        <h1>Profil de {userData?.pseudo}</h1>
      </div>
      <div className="profil__contain">
        <div>
          <div className="update-container">
            <div className="left-part">
              <h3>Photo de profil</h3>
              <img src={userData?.picture} alt="user-pic" />
              <UploadImg />
            </div>
          </div>
        </div>

        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {!updateForm && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>
                  {userData?.bio}
                </p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  defaultValue={userData?.bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <button onClick={handleUpdateBio}>Valider Modifications</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfil;
