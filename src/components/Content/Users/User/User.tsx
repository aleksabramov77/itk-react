import React from 'react'
import s from './User.module.css'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import {NavLink} from 'react-router-dom'
import {UserType} from "../../../../types/types";

type PropsType = {
  user: UserType
  isAuth: boolean
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  followingInProgress: Array<number>
}
const User: React.FC<PropsType> = (
  {user, isAuth, followUser, unfollowUser, followingInProgress}) => {
  return (
    <div className={s.user}>
      <div className={s.name}>
        <NavLink to={`/profile/${user.id}`}>
          <img className={s.avatar} alt='userAvatar'
               src={user.photos.small ? user.photos.small : defaultAvatar}/>
        </NavLink>
        <span>{user.name}<br/>id: {user.id}</span>
      </div>
      <div className={s.country}>    {'user.location.country'}    </div>
      <div className={s.city}>    {'user.location.city'}    </div>
      <div className={s.status}>    {user.status}    </div>

      {isAuth &&
      <div className={s.followed}>
        {user.followed
          ? <button
            disabled={followingInProgress.some(id => id === user.id)} // проверка id на наличие в текущий мемент запроса на сервер (если есть кнопку Дизэйблим)
            onClick={() => unfollowUser(user.id)}
            className={s.followButton}
          > Unfollow </button>
          : <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => followUser(user.id)}
            className={s.followButton}
          > Follow </button>
        }
      </div>}
    </div>
  )
}

export default User