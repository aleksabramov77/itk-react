const SET_USER = 'SET_USER'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    // debugger

    switch (action.type) {

        case SET_USER:
            // debugger
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state

    }
    // debugger
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER, data: {id, email, login} })


export default authReducer
