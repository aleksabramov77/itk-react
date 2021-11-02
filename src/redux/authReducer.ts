import {authAPI, securityAPI} from '../api/api'
import {FORM_ERROR} from 'final-form'
import {toggleFetching} from './appReducer'


/* Actions types */

const SET_USER = 'auth/SET_USER'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'


/* Initial state */

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaURL: null as string | null,
}
type InitialStateType = typeof initialState

/* Reducer */

const authReducer = (state = initialState, action: any): InitialStateType => {
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


/* Action Creators */
type PayloadSetAuthUserDataACType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaURL?: string | null
}
type SetAuthUserDataACType = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  type: typeof SET_USER,
  payload: PayloadSetAuthUserDataACType
}
export const setAuthUserData: SetAuthUserDataACType = (id, email, login, isAuth) => ({
  type: SET_USER,
  payload: {id, email, login, isAuth, captchaURL: null}
})

type SetCaptchaACType = (captchaURL: string) => {
  type: typeof SET_CAPTCHA,
  payload: { captchaURL: string }
}
export const setCaptcha: SetCaptchaACType = (captchaURL) => ({type: SET_CAPTCHA, payload: {captchaURL}})


/* Thunks */

export const getAuthUserData = () => async (dispatch: any) => {
  dispatch(toggleFetching(true))
  const response = await authAPI.me()
    // debugger
  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data
    dispatch(setAuthUserData(+id, email, login, true))
  }
  dispatch(toggleFetching(false))
}

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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
    return {[FORM_ERROR]: response.data.messages[0]}
  }
}

export const logOut = () => async (dispatch: any) => {
  dispatch(toggleFetching(true))
  const response = await authAPI.logOut()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
  dispatch(toggleFetching(false))
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaURL()
  // debugger
  dispatch(setCaptcha(response.data.url))
}


/* Default export */

export default authReducer
