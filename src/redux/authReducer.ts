import {authAPI, securityAPI} from '../api/api'
import {FORM_ERROR} from 'final-form'
import {AppActionTypes, toggleFetching} from './appReducer'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


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

const authReducer = (state = initialState, action: AuthActionTypes): InitialStateType => {
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
type AuthActionTypes = SetAuthUserDataActionType | SetCaptchaActionType

type PayloadSetAuthUserDataACType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaURL: string | null
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER,
  payload: PayloadSetAuthUserDataACType
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER,
  payload: {id, email, login, isAuth, captchaURL: null}
})

type SetCaptchaActionType = {
  type: typeof SET_CAPTCHA,
  payload: { captchaURL: string }
}
export const setCaptcha = (captchaURL: string): SetCaptchaActionType => ({type: SET_CAPTCHA, payload: {captchaURL}})


/* Thunks */

type ThunkType = ThunkAction<Promise<void | { [FORM_ERROR]: string }>, AppStateType, any, AuthActionTypes | AppActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  dispatch(toggleFetching(true))
  const response = await authAPI.me()
  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data
    dispatch(setAuthUserData(+id, email, login, true))
  }
  dispatch(toggleFetching(false))
}

export const logIn = (values: { email: string, password: string, rememberMe: boolean, captcha: string }): ThunkType =>
  async (dispatch) => {
    dispatch(toggleFetching(true))
    const response = await authAPI.logIn(values)
    dispatch(toggleFetching(false))
    if (response.data.resultCode === 0) {
      await dispatch(getAuthUserData())
    } else {
      if (response.data.resultCode === 10) {
        await dispatch(getCaptchaUrl())
      }
      return {[FORM_ERROR]: response.data.messages[0]}
    }
  }

export const logOut = (): ThunkType => async (dispatch) => {
  dispatch(toggleFetching(true))
  const response = await authAPI.logOut()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
  dispatch(toggleFetching(false))
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaURL()
  dispatch(setCaptcha(response.data.url))
}


/* Default export */

export default authReducer
