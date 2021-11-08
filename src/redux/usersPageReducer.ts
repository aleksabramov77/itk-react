import {usersAPI} from '../api/api'
import {AppActionTypes, toggleFetching} from './appReducer'
import {updateObjectInArray} from '../utils/objectHelpers'
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

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

const usersPageReducer = (state = initialState, action: UsersPageActionTypes): InitialState => {
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

type UsersPageActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType |
  SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleFollowingActionType


type FollowActionType = { type: typeof FOLLOW, userId: number }
export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})


type UnfollowActionType = { type: typeof UNFOLLOW, userId: number }
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})


type SetUsersActionType = { type: typeof SET_USERS, users: Array<UserType> }
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})


export type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})


type SetTotalUsersCountActionType = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => (
  {type: SET_TOTAL_USERS_COUNT, totalUsersCount})


type ToggleFollowingActionType = { type: typeof TOGGLE_FOLLOWING, following: boolean, id: number }
export const toggleFollowing = (following: boolean, id: number): ToggleFollowingActionType => (
  {type: TOGGLE_FOLLOWING, following, id})


/* Thunks */

type DispatchType = Dispatch<UsersPageActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersPageActionTypes | AppActionTypes>

export const requestUsers = (usersOnPage: number, page: number): ThunkType =>
  async (dispatch) => {
    dispatch(toggleFetching(true))
    const response = await usersAPI.getUsers(usersOnPage, page)
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
    dispatch(toggleFetching(false))
  }


const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   APIMethod: any,
                                   actionCreator: (userId: number) => FollowActionType | UnfollowActionType) => {
  dispatch(toggleFollowing(true, userId))
  const response = await APIMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
    dispatch(toggleFollowing(false, userId))
  }
}

export const unfollowUser = (userId: number): ThunkType => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowAC)
}

export const followUser = (userId: number): ThunkType => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followAC)
}


/* Default export */

export default usersPageReducer
