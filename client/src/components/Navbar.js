import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/appContext";

function Navbar() {
  const uid = useContext(UserContext);
  console.log(uid);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact="true" to="/">
            <div className="logo">
              <img src="./img/icon.png" alt="raccoon" />
              <h3>Raccoon</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact="true" to="/profil">
                Bienvenue .....
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact="true" to="/profil">
                <img src="./img/icons/login.svg" alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
