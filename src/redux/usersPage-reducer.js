const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersOnPage: 20,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
const usersPageReducer = (state = initialState, action) => {
    // debugger

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
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING:
            // debugger
            return {
                ...state,
                followingInProgress: action.following ?
                    [...state.followingInProgress, action.id]:
                    [...state.followingInProgress.filter(id => id != action.id)]
            }

        default:
            return state

    }
    // debugger
}

export const follow = userId => ({ type: FOLLOW, userId })
export const unfollow = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })
export const toggleFollowing = (following, id) => ({ type: TOGGLE_FOLLOWING, following, id})

export default usersPageReducer
