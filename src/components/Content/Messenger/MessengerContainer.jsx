import { addMessage } from '../../../redux/messengerPageReducer'
import Messenger from './Messenger'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'



let mapStateToProps = state => ({
    dialogs: state.messengerPage.dialogsData,
    messages: state.messengerPage.messagesData,
    newMessageText: state.messengerPage.newMessageText,
    isAuth: state.auth.isAuth,
})

export default compose (connect(mapStateToProps, {
    addMessage,
}),withAuthRedirect)
(Messenger)