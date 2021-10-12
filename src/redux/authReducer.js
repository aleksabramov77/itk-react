import { authAPI } from '../api/api'
import { FORM_ERROR } from 'final-form'
import { toggleFetching } from './appReducer'

const SET_USER = 'auth/SET_USER'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER:
            return {
                ...state,
                ...action.payload,
                // isAuth: true,
            }

        default:
            return state

    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER, payload: { id, email, login, isAuth } })

export const getAuthUserData = () => async dispatch => {
    dispatch(toggleFetching(true))
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    dispatch(toggleFetching(false))
}

export const logIn = (email, password, rememberMe) => async dispatch => {
    dispatch(toggleFetching(true))
    const response = await authAPI.logIn(email, password, rememberMe)
    dispatch(toggleFetching(false))
    if (response.data.resultCode === 0) dispatch(getAuthUserData())
    else return { [FORM_ERROR]: response.data.messages[0] }
}

export const logOut = () => async dispatch => {
    dispatch(toggleFetching(true))
    const response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
    dispatch(toggleFetching(false))
}

export default authReducer
