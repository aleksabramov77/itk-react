// import React from "react";
import { addPost } from '../../../../redux/profilePageReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = state => ({
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
})



export default connect(mapStateToProps, {
    addPost,
})(MyPosts)

