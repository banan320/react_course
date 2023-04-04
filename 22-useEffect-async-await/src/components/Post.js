import React from "react";
import "./Post.css";

const Post = (props) => {
  const { userId, id, title, body } = props;

  return (
    <div className="post">
      <small> Id: {id}</small>
      <h2>Title: {title}</h2>
      <p>{body}</p>
      <h3>User ID: {userId}</h3>
    </div>
  );
};

export default Post;
