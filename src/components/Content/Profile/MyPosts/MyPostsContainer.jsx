// import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profilePage-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = state => ({
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
})

let mapDispatchToProps = dispatch => ({
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: newText => dispatch(updateNewPostTextActionCreator(newText))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

