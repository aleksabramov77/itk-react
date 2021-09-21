import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";


const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          // debugger

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          let updateNewPostText = (newText) => {
            store.dispatch(updateNewPostTextActionCreator(newText));
          };

          return (
            < MyPosts
              posts={state.profilePage.postsData}
              newPostText={state.profilePage.newPostText}
              addPost={addPost}
              updateNewPostText={updateNewPostText}
            />)
        }

      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
