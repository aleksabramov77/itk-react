import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'
import { toggleFetching } from '../../redux/usersPage-reducer'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount () {
        this.props.toggleFetching(true)
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    this.props.setAuthUserData(id, email, login)
                }
                this.props.toggleFetching(false)
            })
    }

    render () {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Header {...this.props}/>
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { setAuthUserData, toggleFetching })(HeaderContainer)
