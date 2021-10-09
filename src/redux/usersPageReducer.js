import { usersAPI } from '../api/api'
import { toggleFetching } from './appReducer'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
// const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersOnPage: 20,
    currentPage: 1,
    // isFetching: true,
    followingInProgress: []
}
const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
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
        // case TOGGLE_FETCHING:
        //     return {
        //         ...state,
        //         isFetching: action.isFetching,
        //     }
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

export const followAC = userId => ({ type: FOLLOW, userId })
export const unfollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
// export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })
export const toggleFollowing = (following, id) => ({ type: TOGGLE_FOLLOWING, following, id })

export const getUsers = (usersOnPage, currentPage) => dispatch => {
    dispatch(toggleFetching(true))
    usersAPI.getUsers(usersOnPage, currentPage)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
            dispatch(toggleFetching(false))
        })
}
export const unfollowUser = (userId) => dispatch => {
    dispatch(toggleFollowing(true, userId)) // диспатчим в стор инфу, что начался запрос на сервер и id пользователя, по которому идет запрос
    usersAPI.unfollowUser(userId) // запускаем функцию DAL уровня
        .then(response => {  // получив ответ от сервера ...
            if (response.data.resultCode === 0) {  // проверяем, что статус ОК
                dispatch(unfollowAC(userId)) // диспатчим в стор инфу что мы отписались
                dispatch(toggleFollowing(false, userId)) // диспатчим в стор инфу что сейчвс к серверу идет запрос по юзеру с ID
            }
        })
}
export const followUser = (userId) => dispatch => {
    dispatch(toggleFollowing(true, userId)) // диспатчим в стор инфу, что начался запрос на сервер и id пользователя, по которому идет запрос
    usersAPI.followUser(userId) // запускаем функцию DAL уровня
        .then(response => {  // получив ответ от сервера ...
            if (response.data.resultCode === 0) {  // проверяем, что статус ОК
                dispatch(followAC(userId)) // диспатчим в стор инфу что мы отписались
                dispatch(toggleFollowing(false, userId)) // диспатчим в стор инфу что сейчвс к серверу идет запрос по юзеру с ID
            }
        })
}

export default usersPageReducer
