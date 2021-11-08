import React from "react";
import s from "./Post.module.css";
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../../../redux/redux-store'
import {PostType} from "../../../../../types/types";
import {deletePost} from "../../../../../redux/profilePageReducer";


const Post: React.FC<PostType> = ({id, message, likesCount}) => {
  const avatar = useSelector((state: AppStateType) => state.profilePage.userProfile.photos.small)
  const dispatch = useDispatch()
  return (
    <div className={s.post}>
      <img alt='ava'
           className={s.avatar}
           src={avatar}
      />
      <div className={s.postText}>
        {message}
      </div>
      <div>
        <span>{likesCount} likes</span>
        <button onClick={()=>dispatch(deletePost(id))}>Удалить</button>
      </div>
    </div>
  );
};

export default Post;
