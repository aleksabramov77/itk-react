import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        className={s.avatar}
        src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
      />
      <div className={s.postText}>{props.message}</div>
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
