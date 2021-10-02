import React from 'react'
import { addMessage, updateNewMessageText } from '../../../redux/messengerPage-reducer'
import Messenger from './Messenger'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'



let mapStateToProps = state => ({
    dialogs: state.messengerPage.dialogsData,
    messages: state.messengerPage.messagesData,
    newMessageText: state.messengerPage.newMessageText,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
    addMessage, updateNewMessageText,
})(withAuthRedirect(Messenger))