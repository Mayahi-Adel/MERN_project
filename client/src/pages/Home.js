import React, { useContext } from "react";
import UserContext from "../context/appContext";

function Home() {
  const uid = useContext(UserContext);
  console.log(uid);
  return <div>Home</div>;
}

export default Home;
