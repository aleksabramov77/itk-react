import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  console.log('START', props.postData)
  // debugger
  
  let postsElements = props.postsData.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
    )) 
    
  console.log('END', postsElements)
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea className={s.textareaBlock}></textarea>
        </div>
        <div>
          <button  className={s.buttonBlock}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
        
      </div>
    </div>
  );
};

export default MyPosts;
