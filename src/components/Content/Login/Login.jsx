import { Field, reduxForm } from 'redux-form'
import { maxLength, minLength, required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormsControls/FormsControls'
import React from 'react'
import s from '../Messenger/Messenger.module.css'

const maxLength15 = maxLength(25)
const minLength5 = minLength(5)

const LoginForm = props => {

// debugger
    return (

        <form onSubmit={props.handleSubmit}>
            <Field
                component={Input}
                name='login'
                placeholder='Login'
                validate={[
                    required,
                    maxLength15,
                    minLength5
                ]}
            />
            <Field component={Input} name='password' placeholder='Password'
                        validate={[required, maxLength15, minLength5 ]}
            />
            <div><Field component={Input} name='rememberMe' type='checkbox'/> remember me</div>
            <div className={s.buttonBlock}>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
// const onSubmit = formData => console.log(formData)
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={formData => console.log(formData)}/>
        </div>
    )
}

export default Login


