import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/messengerPage-reducer'
import Messenger from './Messenger'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class MessengerContainer extends React.Component {

    render () {

        if (!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <Messenger {...this.props}/>
        )
    }
}

let mapStateToProps = state => ({
    dialogs: state.messengerPage.dialogsData,
    messages: state.messengerPage.messagesData,
    newMessageText: state.messengerPage.newMessageText,
    isAuth: state.auth.isAuth,
})

let mapDispatchToProps = dispatch => ({
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: newText => dispatch(updateNewMessageTextActionCreator(newText))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)