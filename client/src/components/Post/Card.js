import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { dateParser } from "../../utils";
import FollowUser from "../Profil/FollowUser";
import LikeButton from "./LikeButton";

function Card({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.users);
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (usersData) setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={usersData?.users
                ?.map((user) => {
                  if (user._id === post.posterId) return user.picture;
                })
                .join("")}
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {usersData?.users?.map((user) => {
                    if (user._id === post.posterId) return user.pseudo;
                  })}
                </h3>
                {post.posterId !== userData?._id && (
                  <span>
                    <FollowUser idToFollow={post.posterId} type="card" />
                  </span>
                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            <p>{post.message}</p>
            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
            {post.video && (
              <iframe
                width="500"
                height="300"
                src={post.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={post._id}
              ></iframe>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img src="./img/icons/message1.svg" alt="edit-comment" />
                <span>{post.comments.length}</span>
              </div>
              <LikeButton post={post} />
              <img src="./img/icons/share.svg" alt="share post" />
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default Card;
