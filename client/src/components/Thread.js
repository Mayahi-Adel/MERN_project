import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import { isEmpty } from "../utils";
import Card from "./Post/Card";

function Thread() {
  const [loadPosts, setLoadPosts] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    if (loadPosts) {
      dispatch(getPosts());
      setLoadPosts(false);
    }
  }, [loadPosts, dispatch]);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => <Card key={post._id} post={post} />)}
      </ul>
    </div>
  );
}

export default Thread;
