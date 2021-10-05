import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component='textarea'
                        className={s.textareaBlock}
                        placeholder='Enter your new post'
                // ref={newPostElement}
                // value={props.newPostText}
                        name='newPostText'/></div>
            <div>
                <button className={s.buttonBlock}> Add post </button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm)

const MyPosts = props => {

    let postsElements = props.posts.slice(0).reverse().map(p => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    ))

    const addPost = formData => props.addPost(formData.newPostText)

    // let newPostElement = React.createRef()

    // let onUpdateNewPostText = () => {
    //     let newText = newPostElement.current.value
    //     props.updateNewPostText(newText)
    // }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>

                <AddPostReduxForm onSubmit={addPost}/>

            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

export default MyPosts
