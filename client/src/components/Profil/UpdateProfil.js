import React from "react";
import LeftNav from "../LeftNav";
import { useSelector } from "react-redux";
import UploadImg from "./UploadImg";

function UpdateProfil() {
  const userData = useSelector((state) => state.userReducer?.data);

  return (
    <>
      <LeftNav />
      <div className="profil__container">
        <div>
          <h1>Profil de {userData?.pseudo}</h1>
          <div className="update-container">
            <div className="left-part">
              <h3>Photo de profil</h3>
              <img src={userData?.picture} alt="user-pic" />
              <UploadImg />
            </div>
          </div>
        </div>
        <div>Partie de droite</div>
      </div>
    </>
  );
}

export default UpdateProfil;
