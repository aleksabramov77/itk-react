import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import Preloader from '../../common/Preloader/Preloader'
import { getUserProfile } from '../../../redux/profilePage-reducer'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount () {
        this.props.getUserProfile(this.props.match.params.userId, this.props.authId) // получаем userId из Match благодаря оборачиванию в withRouter
    }

    render () {
    if (!this.props.isAuth) return <Redirect to='/login' />

    return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        authId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    getUserProfile
})(withRouter(ProfileContainer))
