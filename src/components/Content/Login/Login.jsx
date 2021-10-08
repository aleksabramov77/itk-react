import { Form, Field } from 'react-final-form'
import { composeValidators, maxLength, minLength, required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormsControls/FormsControls'
import React from 'react'
import s from '../Messenger/Messenger.module.css'
import { Redirect } from 'react-router-dom'

const LoginForm = props =>
    <Form
        // className={s.correct}
        onSubmit={props.onSubmit}
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

            // debugger
            return (
                <form
                    onSubmit={event => {handleSubmit(event).then(reset)}}
                >
                    <div>
                        {submitError}
                    </div>
                    <Field
                        name='email'
                        className={submitError ? s.submitError : s.correct }

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
                        className={submitError ? s.submitError : s.correct }

                        placeholder='Password'
                        component={Input}
                        type='password'
                        validate={composeValidators(
                            required,
                            maxLength(25),
                            minLength(5))}
                    />
                    <div>
                        <Field
                            name='rememberMe'
                            component={Input}
                            type='checkbox'
                        />
                        remember me
                    </div>
                    <div className={s.buttonBlock}>
                        <button
                            type="submit"
                            disabled={submitting || pristine}                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            )
        }
        }
    />

const Login = props => {
    const logIn = ({ email, password, rememberMe }) => props.logIn(email, password, rememberMe)

    if (props.isAuth) return <Redirect to='/profile'/>

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={logIn}/>
        </div>
    )
}

export default Login


