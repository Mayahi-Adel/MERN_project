import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/user.actions";

function FollowUser({ idToFollow }) {
  const userData = useSelector((state) => state.user.data);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userData?._id, idToFollow));
    setIsFollowed(true);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(userData?._id, idToFollow));
    setIsFollowed(false);
  };

  useEffect(() => {
    if (userData?.following?.includes(idToFollow)) {
      setIsFollowed(true);
    } else setIsFollowed(false);
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed ? (
        <button className="unfollow-btn" onClick={handleUnfollow}>
          Abonné
        </button>
      ) : (
        <button className="unfollow-btn" onClick={handleFollow}>
          Suivre
        </button>
      )}
    </>
  );
}

export default FollowUser;
