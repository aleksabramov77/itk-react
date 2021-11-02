import {usersAPI} from '../api/api'
import {toggleFetching} from './appReducer'
import {updateObjectInArray} from '../utils/objectHelpers'
import {UserType} from "../types/types";

const FOLLOW = 'usersPage/FOLLOW'
const UNFOLLOW = 'usersPage/UNFOLLOW'
const SET_USERS = 'usersPage/SET_USERS'
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'usersPage/SET_TOTAL_USERS_COUNT'
const TOGGLE_FOLLOWING = 'usersPage/TOGGLE_FOLLOWING'


/* Initial state */

type InitialState = typeof initialState
const initialState = {
  users: [] as Array<UserType>,
  totalUsersCount: 0 as number,
  usersOnPage: 20 as number,
  currentPage: 1 as number,
  followingInProgress: [] as Array<number>, // Array of users id
}


/* Reducer */

const usersPageReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.following
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter(id => id !== action.id)]
      }
    default:
      return state
  }
}


/* Action Creators */

type FollowACType = (userId: number) => {
  type: typeof FOLLOW, userId: number
}
export const followAC: FollowACType = (userId) => ({type: FOLLOW, userId})

type UnfollowACType = (userId: number) => {
  type: typeof UNFOLLOW, userId: number
}
export const unfollowAC: UnfollowACType = (userId) => ({type: UNFOLLOW, userId})

type SetUsersACType = (users: Array<UserType>) => {
  type: typeof SET_USERS, users: Array<UserType>
}
export const setUsers: SetUsersACType = (users) => ({type: SET_USERS, users})

type SetCurrentPageACType = (currentPage: number) => {
  type: typeof SET_CURRENT_PAGE, currentPage: number
}
export const setCurrentPage: SetCurrentPageACType = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUsersCountACType = (totalUsersCount: number) => {
  type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number
}
export const setTotalUsersCount: SetTotalUsersCountACType = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
})

type ToggleFollowingACType = (following: boolean, id: number) => {
  type: typeof TOGGLE_FOLLOWING, following: boolean, id: number
}
export const toggleFollowing: ToggleFollowingACType = (following, id) => ({type: TOGGLE_FOLLOWING, following, id})


/* Thunks */

export const requestUsers = (usersOnPage: number, page: number) => async (dispatch: any) => {
  dispatch(toggleFetching(true))
  const response = await usersAPI.getUsers(usersOnPage, page)
  dispatch(setUsers(response.data.items))
  dispatch(setTotalUsersCount(response.data.totalCount))
  dispatch(toggleFetching(false))
}

const followUnfollowFlow = async (dispatch: any, userId: number, APIMethod: any, actionCreator: FollowACType | UnfollowACType) => {
  dispatch(toggleFollowing(true, userId)) // диспатчим в стор инфу, что начался запрос на сервер и id пользователя, по которому идет запрос
  const response = await APIMethod(userId)// запускаем функцию DAL уровня
  if (response.data.resultCode === 0) {  // получив ответ от сервера ... проверяем, что статус ОК
    dispatch(actionCreator(userId)) // диспатчим в стор инфу что мы отписались
    dispatch(toggleFollowing(false, userId)) // диспатчим в стор инфу что сейчвс к серверу идет запрос по юзеру с ID
  }
}
export const unfollowUser = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowAC)
}
export const followUser = (userId: number) => async (dispatch: any) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followAC)
}


/* Default export */

export default usersPageReducer
