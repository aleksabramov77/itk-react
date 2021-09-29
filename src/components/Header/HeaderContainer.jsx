import React from 'react'
// import s from './Header.module.css'
import Header from './Header'
import { connect } from 'react-redux'
import * as axios from 'axios'
import { setAuthUserData } from '../../redux/auth-reducer'
import { toggleFetching } from '../../redux/usersPage-reducer'
import Preloader from '../common/Preloader/Preloader'

class HeaderContainer extends React.Component {
    componentDidMount () {
        this.props.toggleFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
                this.props.toggleFetching(false)
                // debugger
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
export default connect(mapStateToProps, {setAuthUserData, toggleFetching})(HeaderContainer)
