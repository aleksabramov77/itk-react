import User from './User/User'
// import s from './Users.module.css'
import React from 'react'
import Paginator from '../../common/Paginator/Paginator'

const Users = ({
    totalUsersCount, usersOnPage, currentPage, onPageChanged,
    users, followUser, unfollowUser, followingInProgress, isAuth
}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} itemsOnPage={usersOnPage} currentPage={currentPage}
                       onPageChanged={onPageChanged }/>
            {users.map(u => <User
                key={u.id} userData={u}
                followUser={followUser} unfollowUser={unfollowUser}
                followingInProgress={followingInProgress}
                isAuth={isAuth}
            />)}
        </div>)
}

export default Users