import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Form, Field } from 'react-final-form'

import { composeValidators, maxLength, minLength, required } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormsControls/FormsControls'

const AddPostForm = props =>
    <Form
        onSubmit={props.onSubmit}
        // initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => {
            // debugger
            return (
            <form onSubmit={handleSubmit}>
                <Field
                    name='newPostText'
                    component={Textarea}
                    className={s.textareaBlock}
                    placeholder='Enter your new post'
                    validate={composeValidators(
                        required,
                        maxLength(25),
                        minLength(5))}
                />
                <button
                    type="submit"
                    disabled={submitting}
                >
                    Add post
                </button>
            </form>)
        }
        }
    />


const MyPosts = props => {

    const postsElements = props.posts.slice(0).reverse().map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>
    )

    const addPost = formData => props.addPost(formData.newPostText)

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <AddPostForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}

export default MyPosts
