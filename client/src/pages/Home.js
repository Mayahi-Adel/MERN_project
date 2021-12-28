import React from "react";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";

function Home() {
  return (
    <>
      <LeftNav active="home" />
      <div className="home">
        <div className="main">
          <Thread />
        </div>
      </div>
    </>
  );
}

export default Home;
