import React, { useContext } from "react";
import Log from "../components/Log";
import UserContext from "../context/appContext";

function Profil() {
  const uid = useContext(UserContext);

  return (
    <div className="profil">
      {uid ? (
        <h1>Update page</h1>
      ) : (
        <div className="profil__container">
          <div className="profil__img">
            <img src="./img/log.svg" alt="login" />
          </div>
          <Log signIn={false} signUp={true} />
        </div>
      )}
    </div>
  );
}

export default Profil;
