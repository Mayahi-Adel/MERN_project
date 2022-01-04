import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../utils";

function FriendsHint() {
  const [isLoading, setIsLoading] = useState(true);
  const [playOnce, setPlayOnce] = useState(true);
  const [friendsHint, setFriendsHint] = useState([]);
  const userData = useSelector((state) => state.user);
  const usersData = useSelector((state) => state.users);

  const notFriendList = () => {
    let list = [];
    usersData.map((user) => {
      if (user._id !== userData._id && !user.followers.includes(userData._id)) {
        return list.push(user._id);
      } else return null;
    });
    list.sort(() => 0.5 - Math.random());
    setFriendsHint(list);
  };

  useEffect(() => {
    if (playOnce && !isEmpty(usersData[0])) {
      notFriendList();
      setIsLoading(false);
      setPlayOnce(false);
    }
  }, [usersData, userData]);
  return <div>allowFullScreen</div>;
}

export default FriendsHint;
