import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile, getUserStatus, setUserProfileData, updateUserStatus } from '../../../redux/profilePageReducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount () {
        const userId = this.props.match.params.userId || this.props.authId
        this.props.getUserProfile(userId) // получаем userId из Match благодаря оборачиванию в withRouter
        this.props.getUserStatus(userId) // получаем userId из Match благодаря оборачиванию в withRouter
    }

    // componentDidUpdate (prevProps, prevState, snapshot) {
    //     if (prevProps.authId !== this.props.authId) {
    //         this.props.setUserProfileData(this.props.authId)
    //     }
    //     console.log('componentDidUpdate')
    // }

    render () {
        // console.log('ProfileContainer - authId: ', this.props.authId)
        // console.log('ProfileContainer - status: ', this.props.status)
        // console.log('ProfileContainer - userPr: ', this.props.userProfile.userId)
        return (
            <Profile
                userProfile={this.props.userProfile} status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

let mapStateToProps = state => {
    return {
        authId: state.auth.id,
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
    }
}
export default compose(connect(mapStateToProps, {
        getUserProfile, getUserStatus, updateUserStatus, setUserProfileData
    }), withRouter,
    withAuthRedirect
)
(ProfileContainer)
