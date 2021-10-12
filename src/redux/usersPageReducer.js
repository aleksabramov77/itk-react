import { usersAPI } from '../api/api'
import { toggleFetching } from './appReducer'
import { updateObjectInArray } from '../utils/objectHelpers'

const FOLLOW = 'usersPage/FOLLOW'
const UNFOLLOW = 'usersPage/UNFOLLOW'
const SET_USERS = 'usersPage/SET_USERS'
const SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'usersPage/SET_TOTAL_USERS_COUNT'
const TOGGLE_FOLLOWING = 'usersPage/TOGGLE_FOLLOWING'
const FAKE = 'usersPage/FAKE'

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersOnPage: 20,
    currentPage: 1,
    followingInProgress: [],
    fake: 0,
}
const usersPageReducer = (state = initialState, action) => {
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
                // users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            // console.log(action.currentPage)
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
        case FAKE:
            return {
                ...state,
                fake: state.fake + 1
            }
        default:
            return state
    }
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unfollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleFollowing = (following, id) => ({ type: TOGGLE_FOLLOWING, following, id })

export const requestUsers = (usersOnPage, page) => async dispatch => {
    dispatch(toggleFetching(true))
    const response = await usersAPI.getUsers(usersOnPage, page)
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
    dispatch(toggleFetching(false))
}

const followUnfollowFlow = async (dispatch, userId, APIMethod, actionCreator) => {
    dispatch(toggleFollowing(true, userId)) // диспатчим в стор инфу, что начался запрос на сервер и id пользователя, по которому идет запрос
    const response = await APIMethod(userId)// запускаем функцию DAL уровня
    if (response.data.resultCode === 0) {  // получив ответ от сервера ... проверяем, что статус ОК
        dispatch(actionCreator(userId)) // диспатчим в стор инфу что мы отписались
        dispatch(toggleFollowing(false, userId)) // диспатчим в стор инфу что сейчвс к серверу идет запрос по юзеру с ID
    }
}
export const unfollowUser = userId => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowAC)
}
export const followUser = userId => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followAC)
}

export default usersPageReducer
