import { createSelector } from 'reselect'

const getUsersRegular = state => state.usersPage.users
export const getUsers2 = state => getUsersRegular(state).filter(u => true)
export const getUsers = createSelector(getUsersRegular, users => users.filter(u => true))



export const getIsAuth = state => state.auth.isAuth
export const getTotalUsersCount = state => state.usersPage.totalUsersCount
export const getUsersOnPage = state => state.usersPage.usersOnPage
export const getCurrentPage = state => state.usersPage.currentPage
export const getFollowingInProgress = state => state.usersPage.followingInProgress




