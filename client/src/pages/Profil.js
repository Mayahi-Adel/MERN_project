import React from "react";
import Log from "../components/Log";

function Profil() {
  return (
    <div className="profil">
      <div className="profil__container">
        <div className="profil__img">
          <img src="./img/log.svg" alt="login" />
        </div>
        <Log signIn={false} signUp={true} />
      </div>
    </div>
  );
}

export default Profil;
