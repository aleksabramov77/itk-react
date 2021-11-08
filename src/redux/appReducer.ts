import {getAuthUserData} from './authReducer'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


/* Actions types */

const INITIALIZED_SUCCESS: string = 'app/INITIALIZED_SUCCESS'
const TOGGLE_FETCHING: string = 'app/TOGGLE_FETCHING'


/* Initial state */

type InitialStateType = {
  initialized: boolean
  isFetching: boolean
}
const initialState: InitialStateType = {
  initialized: false,
  isFetching: true
}


/* Reducer */

const appReducer = (state = initialState, action:
  // AppActionTypes
  ToggleFetchingActionType
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}


/* Action Creators */

export type AppActionTypes = InitializeSuccessActionType | ToggleFetchingActionType
// export type AppActionTypes = ToggleFetchingActionType

type InitializeSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializeSuccess = (): InitializeSuccessActionType => ({type: INITIALIZED_SUCCESS})

type ToggleFetchingActionType = {
  type: typeof TOGGLE_FETCHING
  isFetching: boolean
}
export const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => ({type: TOGGLE_FETCHING, isFetching})


/* Thunks */

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, AppActionTypes>

export const initializeApp = (): ThunkType => async (dispatch) => {
  const promise = await dispatch(getAuthUserData())
  Promise.all([promise]).then(() => dispatch(initializeSuccess()))
}


/* Default export */

export default appReducer
