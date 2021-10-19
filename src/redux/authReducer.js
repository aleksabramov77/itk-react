import { authAPI, securityAPI } from '../api/api'
import { FORM_ERROR } from 'final-form'
import { toggleFetching } from './appReducer'
import React from 'react'

const SET_USER = 'auth/SET_USER'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state

    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER,
    payload: { id, email, login, isAuth, captchaURL: null }
})
export const setCaptcha = (captchaURL) => ({ type: SET_CAPTCHA, payload: { captchaURL } })

export const getAuthUserData = () => async dispatch => {
    dispatch(toggleFetching(true))
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    dispatch(toggleFetching(false))
}

export const logIn = (email, password, rememberMe, captcha) => async dispatch => {
    dispatch(toggleFetching(true))
    const response = await authAPI.logIn(email, password, rememberMe, captcha)
    dispatch(toggleFetching(false))
    // debugger
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        return { [FORM_ERROR]: response.data.messages[0] }
    }

}

export const logOut = () => async dispatch => {
    dispatch(toggleFetching(true))
    const response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
    dispatch(toggleFetching(false))
}

export const getCaptchaUrl = () => async dispatch => {
    const response = await securityAPI.getCaptchaURL()
    // debugger
    dispatch(setCaptcha(response.data.url))
}

export default authReducer
