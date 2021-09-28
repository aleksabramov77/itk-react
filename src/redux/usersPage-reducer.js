const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'



let initialState = {
    users: [
    ],
    totalUsersCount: 0,
    usersOnPage: 20,
    currentPage: 1,
    isFetching: true,
}
const usersPageReducer = (state = initialState, action) => {
    // debugger

    switch (action.type) {

        case CHANGE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: !(u.followed) } : u)
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            // debugger
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
            // debugger
            return {
                ...state,
                isFetching: action.isFetching,
            }


        default:
            return state

    }
    // debugger
}

export const changeFollowing = userId => ({ type: CHANGE_FOLLOWING, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })

export default usersPageReducer
