// import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/messengerPage-reducer'
import Messenger from './Messenger'
import { connect } from 'react-redux'

let mapStateToProps = state => ({
    dialogs: state.messengerPage.dialogsData,
    messages: state.messengerPage.messagesData,
    newMessageText: state.messengerPage.newMessageText
})

let mapDispatchToProps = dispatch => ({
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: newText => dispatch(updateNewMessageTextActionCreator(newText))
})


export default connect(mapStateToProps, mapDispatchToProps)(Messenger)