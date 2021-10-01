import { authAPI } from '../api/api'

const SET_USER = 'SET_USER'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'


let initialState = {
    id: 18808,
    email: null,
    login: null,
    isFetching: true,
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
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state

    }
    // debugger
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER, data: {id, email, login} })
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching })


export const getAuthUserData = () => dispatch => {
    dispatch(toggleFetching(true))
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setAuthUserData(id, email, login))
            }
            dispatch(toggleFetching(false))
        })
}


export default authReducer
