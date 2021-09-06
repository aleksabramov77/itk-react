import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        className={s.avatar}
        src={props.src}
      />
      <div className={s.postText}>{props.message}</div>
      <div>
        <span>{props.likesCounter}</span>
      </div>
    </div>
  );
};

export default Post;
