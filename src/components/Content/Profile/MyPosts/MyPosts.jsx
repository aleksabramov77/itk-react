import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  // debugger

  let postsElements = props.posts.slice(0).reverse().map(p => (
    <Post
      key={p.id}
      message={p.message}
      likesCount={p.likesCount}

    />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onUpdateNewPostText = () => {
    let newText = newPostElement.current.value;
    props.updateNewPostText(newText);
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onUpdateNewPostText}
            className={s.textareaBlock}
            value={props.newPostText}
          />
        </div>
        <div>
          <button
            className={s.buttonBlock}
            onClick={onAddPost}
          >
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
