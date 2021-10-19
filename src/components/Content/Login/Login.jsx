import { Form, Field } from 'react-final-form'
import { composeValidators, maxLength, minLength, required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormsControls/FormsControls'
import React from 'react'
import s from '../Messenger/Messenger.module.css'
import { Redirect } from 'react-router-dom'

const Login = ({ isAuth, logIn, captchaURL }) => {

    // const logIn = ({ email, password, rememberMe }) => props.logIn(email, password, rememberMe)

    if (isAuth) return <Redirect to='/profile'/>

    return (
        <div>
            <h1>Login</h1>
            <LoginForm logIn={logIn} captchaURL={captchaURL}/>
        </div>
    )
}

const LoginForm = ({ logIn, captchaURL }) => {
    const onSubmit = ({ email, password, rememberMe, captcha }) => logIn(email, password, rememberMe=false, captcha)
    return (
        <Form
            // className={s.correct}
            onSubmit={onSubmit}
            // initialValues={{}}
            render={({
                submitError,
                handleSubmit,
                reset,
                form,
                submitting,
                pristine,
                values,
            }) => {

                return (
                    <form
                        onSubmit={handleSubmit}
                    >
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
                                maxLength(25),
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
                                maxLength(25),
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
                        {captchaURL && <img src={captchaURL}/>}
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
                                disabled={submitting}>
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                // disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )
            }
            }
        />)
}

export default Login


