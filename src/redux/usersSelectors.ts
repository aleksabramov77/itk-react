import { createSelector } from 'reselect'
import {AppStateType} from "./redux-store";

const getUsersRegular = (state: AppStateType) => state.usersPage.users
// export const getUsers2 = state => getUsersRegular(state).filter(u => true)
export const getUsers = createSelector(getUsersRegular, users => users.filter(u => true))



export const getIsAuth = (state: AppStateType) => state.auth.isAuth
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getUsersOnPage = (state: AppStateType) => state.usersPage.usersOnPage
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress




