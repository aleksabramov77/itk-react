import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import * as axios from 'axios'
import Preloader from '../../common/Preloader/Preloader'
import { setUserProfileData } from '../../../redux/profilePage-reducer'
import { toggleFetching } from '../../../redux/usersPage-reducer'
import { withRouter } from 'react-router'

class ProfileContainer extends React.Component {
    componentDidMount () {
        // debugger
        let userId = this.props.match.params.userId
        this.props.toggleFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : this.props.authId}`)
            .then(response => {
                this.props.setUserProfileData(response.data)
                this.props.toggleFetching(false)
                // debugger
            })
    }



    render () {
        // debugger
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile
                    userProfile={this.props.userProfile}
                    // smallPhoto={this.props.smallPhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = state => {
    // debugger
    return {
        // userId: state.profilePage.userProfile.userId,
        userProfile: state.profilePage.userProfile,
        // smallPhoto: state.profilePage.userProfile.photos.small,
        isFetching: state.usersPage.isFetching,
        authId: state.auth.id,

    }
}

export default connect(mapStateToProps, {
    setUserProfileData,
    toggleFetching,
})(withRouter(ProfileContainer))
