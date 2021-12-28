import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Card({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.users?.data);
  const userData = useSelector((state) => state.user?.data);
  console.log(usersData);

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
          <div className="card-right"></div>
        </>
      )}
    </li>
  );
}

export default Card;
