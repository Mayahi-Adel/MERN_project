import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import Card from "./Post/Card";

function Thread() {
  const [loadPosts, setLoadPosts] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts?.data?.posts);
  console.log(posts);

  useEffect(() => {
    if (loadPosts) {
      dispatch(getPosts());
      setLoadPosts(false);
    }
  }, [loadPosts, dispatch]);

  return (
    <div className="thread-container">
      <ul>
        {posts?.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default Thread;
