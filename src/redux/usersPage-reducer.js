const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


let initialState = {
    users: [
    ],
    totalUsersCount: 21,
    usersOnPage: 20,
    currentPage: 1
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
            // debugger
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }


        default:
            return state

    }
    // debugger
}

export const changeFollowingAC = userId => ({ type: CHANGE_FOLLOWING, userId })

export const setUsersAC = users => ({ type: SET_USERS, users })

export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCountAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export default usersPageReducer
