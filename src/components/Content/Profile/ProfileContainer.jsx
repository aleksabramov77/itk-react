import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile } from '../../../redux/profilePage-reducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount () {
        this.props.getUserProfile(this.props.match.params.userId, this.props.authId) // получаем userId из Match благодаря оборачиванию в withRouter
    }

    render () {
        // debugger
        return (
            <Profile userProfile={this.props.userProfile}/>
        )
    }
}




let mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        authId: state.auth.id
    }
}
export default compose (connect(mapStateToProps, {
    getUserProfile
}), withRouter,
    // withAuthRedirect
    )
(ProfileContainer)
