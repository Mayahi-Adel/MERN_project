import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { likePost } from "../../actions/post.actions";
import UserContext from "../../context/appContext";

function LikeButton({ post }) {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UserContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post._id, uid));
    setLiked(true);
  };

  const unlike = () => {};

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
  }, [uid, post.likers, liked]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="./img/icons/heart.svg" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour aimer un post!</div>
        </Popup>
      )}
      {uid && !liked && (
        <img src="./img/icons/heart.svg" alt="like" onClick={like} />
      )}
      {uid && liked && (
        <img src="./img/icons/heart-filled.svg" alt="lunike" onClick={unlike} />
      )}
    </div>
  );
}

export default LikeButton;
