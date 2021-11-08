import User from './User/User'
// import s from './Users.module.css'
import React from 'react'
import Paginator from '../../common/Paginator/Paginator'
import {UserType} from "../../../types/types";


type PropsType = {
  totalUsersCount: number
  usersOnPageCount: number
  currentPageNumber: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
  followingInProgress: Array<number>
  isAuth: boolean
}
const Users: React.FC<PropsType> = (
  {
    totalUsersCount, usersOnPageCount, currentPageNumber, onPageChanged,
    users, followUser, unfollowUser, followingInProgress, isAuth
  }) => {
  return (
    <div>
      <Paginator totalItemsCount={totalUsersCount} itemsOnPageCount={usersOnPageCount}
                 currentPageNumber={currentPageNumber} onPageChanged={onPageChanged}/>
      {users.map(u => <User key={u.id} user={u} isAuth={isAuth}
                            followUser={followUser} unfollowUser={unfollowUser}
                            followingInProgress={followingInProgress}/>)}
    </div>)
}

export default Users