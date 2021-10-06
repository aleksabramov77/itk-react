import { Form, Field } from 'react-final-form'
import { composeValidators, maxLength, minLength, required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormsControls/FormsControls'
import React from 'react'
import s from '../Messenger/Messenger.module.css'



const LoginForm = props =>
        <Form
            onSubmit={props.onSubmit}
            // initialValues={}
            render={({ handleSubmit, form, submitting, pristine, values }) =>
                <form onSubmit={handleSubmit}>
                    <Field
                        name='login'
                        component={Input}
                        placeholder='Login'
                        validate={composeValidators(
                            required,
                            maxLength(25),
                            minLength(5)
                        )}
                    />
                    <Field
                        name='password'
                        placeholder='Password'
                        component={Input}
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
                            disabled={submitting}
                        >
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
            }
        />


const Login = props => {
    const onSubmit = formData => console.log(formData)
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login


