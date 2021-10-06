import s from './Messenger.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { Form, Field } from 'react-final-form'

import { Redirect } from 'react-router-dom'
import { composeValidators, maxLength, minLength, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const AddMessageForm = props =>
    <Form
        onSubmit={props.onSubmit}
        // initialValues={}
        render={({ handleSubmit, form, submitting, pristine, values }) =>
            <form onSubmit={handleSubmit}>

                <Field
                    component={Textarea}
                    name='newMessageText'
                    placeholder='Enter your message'
                    validate={composeValidators(
                        required,
                        maxLength(25),
                        minLength(5)
                    )}
                />
                <div className={s.buttonBlock}>
                    <button
                        type="submit"
                        disabled={submitting}
                    >
                        Send message
                    </button>

                </div>
            </form>
        }
    />

const Messenger = props => {

    if (!props.isAuth) return <Redirect to='/login'/>

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    let addNewMessage = formData => props.addMessage(formData.newMessageText)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messagesItems}>{messagesElements}</div>
            <div className={s.newMessage}><AddMessageForm onSubmit={addNewMessage}/></div>
        </div>
    )
}

export default Messenger