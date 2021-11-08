import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Form, Field} from 'react-final-form'
import {composeValidators, maxLength, minLength, required} from '../../../../utils/validators/validators'
import {Textarea} from '../../../common/FormsControls/FormsControls'
import {useDispatch, useSelector} from 'react-redux'
import {addPost} from '../../../../redux/profilePageReducer'
import {AppStateType} from '../../../../redux/redux-store'


const MyPosts: React.FC = React.memo(() => {
  const posts = useSelector((state: AppStateType) => state.profilePage.postsData)
  const dispatch = useDispatch()
  const onAddPost = (values: { newPostText: string }, form: any) => {
    dispatch(addPost(values.newPostText))
    setTimeout(form.restart)
  }

  const postsElements = posts.slice(0).reverse().map(p =>
    <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
  )

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <AddPostForm onSubmit={onAddPost}/>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
})

type PropsType = {
  onSubmit: any
}
const AddPostForm: React.FC<PropsType> = ({onSubmit}) => {
  return (
    <Form
      className={s.profileInfoBlock}
      onSubmit={onSubmit}
      render={({handleSubmit, submitting, pristine, hasValidationErrors}) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              name='newPostText'
              component={Textarea}
              className={s.textareaBlock}
              placeholder='Enter your new post'
              validate={composeValidators(
                required,
                maxLength(500),
                minLength(1))}
            />
            <button
              type="submit"
              disabled={hasValidationErrors || submitting || pristine}
            >
              Add post
            </button>
          </form>)
      }
      }
    />)
}

export default MyPosts
