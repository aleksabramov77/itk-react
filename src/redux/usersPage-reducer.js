const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     name: 'Vasily',
        //     location: {
        //         country: 'Belarus',
        //         city: 'Minsk'
        //     },
        //     status: 'I like football !!!'
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     name: 'Petr',
        //     location: {
        //         country: 'Russia',
        //         city: 'Penza'
        //     },
        //     status: 'I am a boss !!!'
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     name: 'Egor',
        //     location: {
        //         country: 'Ukraine',
        //         city: 'Kiev'
        //     },
        //     status: 'I am a cat !!!'
        // }
    ]
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
            // debugger
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state

    }
    // debugger
}

export const changeFollowingAC = userId => ({ type: CHANGE_FOLLOWING, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersPageReducer
