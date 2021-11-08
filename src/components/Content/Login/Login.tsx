import {Form, Field} from 'react-final-form'
import {composeValidators, maxLength, minLength, required} from '../../../utils/validators/validators'
import {Input} from '../../common/FormsControls/FormsControls'
import React from 'react'
import s from '../Messenger/Messenger.module.css'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {logIn} from "../../../redux/authReducer";
// import {FORM_ERROR} from "final-form";


const Login: React.FC = () => {
  const dispatch = useDispatch()
  const onLogIn = (values:{ email: string, password: string, rememberMe: boolean, captcha: string }) =>
    dispatch(logIn(values))

  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const captchaURL = useSelector((state: AppStateType) => state.auth.captchaURL)

  if (isAuth) return <Redirect to='/profile'/>

  return (
    <div>
      <h1>Login</h1>
      <Form
        onSubmit={onLogIn}
        render={({
                   submitError,
                   handleSubmit,
                   form,
                   submitting,
                   pristine,
                 }) => {

          return (
            <form onSubmit={handleSubmit}>
              <div className={s.submitError}>
                {submitError}
              </div>
              <Field
                name='email'
                className={submitError ? s.submitError : s.correct}
                component={Input}
                placeholder='Email'
                validate={composeValidators(
                  required,
                  maxLength(50),
                  minLength(5)
                )}
              />
              <Field
                name='password'
                className={submitError ? s.submitError : s.correct}
                placeholder='Password'
                component={Input}
                type='password'
                validate={composeValidators(
                  required,
                  maxLength(50),
                  minLength(5))}
              />
              <label>
                <Field
                  name='rememberMe'
                  component={Input}
                  type='checkbox'
                />
                remember me </label>
              <div>
                {captchaURL && <img alt="captcha" src={captchaURL}/>}
                {captchaURL && <Field
                    name='captcha'
                    className={submitError ? s.submitError : s.correct}
                    placeholder='Captcha'
                    component={Input}
                    type='text'
                    validate={composeValidators(
                      required,
                      maxLength(10))}
                />}

              </div>
              <div className={s.buttonBlock}>
                <button
                  type="submit"
                  disabled={submitting || pristine}>
                  Login
                </button>
                <button
                  type="reset"
                  onClick={() => form.reset()}
                  // disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          )
        }
        }
      />
    </div>
  )
}

export default Login


