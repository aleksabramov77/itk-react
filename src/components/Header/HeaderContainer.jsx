import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logOut } from '../../redux/authReducer'
import Preloader from '../common/Preloader/Preloader'

class HeaderContainer extends React.Component {

    render () {
        // debugger

        return (
            <div>
                {/*{this.props.isFetching ? <Preloader/> : null}*/}
                <Header {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // id: state.auth.id,
    // email: state.auth.email,
    // isFetching: state.auth.isFetching,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {
    logOut
})
(HeaderContainer)
