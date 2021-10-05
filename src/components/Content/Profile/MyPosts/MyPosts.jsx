import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { maxLength, minLength, required } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'

const maxLength15 = maxLength(15)
const minLength2 = minLength(2)

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} className={s.textareaBlock}
                        placeholder='Enter your new post' name='newPostText'
                        validate={[required, maxLength15, minLength2 ]}/></div>
            <div>
                <button className={s.buttonBlock}> Add post</button>
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
