import React, { useContext } from "react";
import LeftNav from "../components/LeftNav";
import Log from "../components/Log";
import NewPost from "../components/Post/NewPost";
import Thread from "../components/Thread";
import UserContext from "../context/appContext";

function Home() {
  const uid = useContext(UserContext);
  return (
    <>
      <LeftNav active="home" />
      <div className="home">
        <div className="main">
          <div className="profil">
            <div className="profil__container">
              {uid ? <NewPost /> : <Log signIn={false} signUp={true} />}
            </div>
          </div>
          <Thread />
        </div>
      </div>
    </>
  );
}

export default Home;
