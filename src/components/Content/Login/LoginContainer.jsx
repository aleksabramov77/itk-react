import React from 'react'
import { logIn } from '../../../redux/authReducer'
import { connect } from 'react-redux'
import Login from './Login'

class LoginContainer extends React.Component {
    render () {
        return (
            <Login {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {logIn})(LoginContainer)


