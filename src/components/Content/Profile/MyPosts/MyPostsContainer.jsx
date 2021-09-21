import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
  let state = props.store.getState();
  // debugger

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updateNewPostText = (newText) => {
    props.store.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (< MyPosts
    posts={state.profilePage.postsData}
    newPostText={state.profilePage.newPostText}
    addPost={addPost}
    updateNewPostText={updateNewPostText}
    />);
};

export default MyPostsContainer;
