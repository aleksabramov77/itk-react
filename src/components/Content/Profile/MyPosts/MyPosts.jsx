import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.postsData.slice(0).reverse().map((post) => (
    <Post
      message={post.message}
      likesCount={post.likesCount}
    />
  ));
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.onChangePost(text)
  }


  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
          ref={newPostElement}
          onChange={onChangePost}
          className={s.textareaBlock}
          value={props.state.newPostText}
          />
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
