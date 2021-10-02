import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../redux/auth-reducer'
import Preloader from '../common/Preloader/Preloader'

class HeaderContainer extends React.Component {

    componentDidMount () {
        this.props.getAuthUserData()
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
export default connect(mapStateToProps, {
    getAuthUserData
})(HeaderContainer)
