import s from './Messenger.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageText' placeholder='Enter your message'/>
            </div>
            <div>
                <button className={s.buttonBlock}> Send message</button>
            </div>
        </form>)
}
const AddMessageReduxForm = reduxForm({ form: 'messengerAddMessage' })(AddMessageForm)

const Messenger = props => {

    if (!props.isAuth) return <Redirect to='/login'/>

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    let addNewMessage = formData => props.addMessage(formData.newMessageText)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messagesItems}>{messagesElements}</div>
            <div className={s.newMessage}><AddMessageReduxForm onSubmit={addNewMessage}/></div>
        </div>
    )
}

export default Messenger