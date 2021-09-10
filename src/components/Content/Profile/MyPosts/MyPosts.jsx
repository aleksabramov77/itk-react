import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

    let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    console.log(newPostElement.current)
    alert(text)
  }

  console.log("END", postsElements);
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea ref={newPostElement} className={s.textareaBlock}></textarea>
        </div>
        <div>
          <button className={s.buttonBlock} onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
