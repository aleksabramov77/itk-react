import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile, getUserStatus, setUserProfileData, updateUserStatus } from '../../../redux/profilePageReducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import Preloader from '../../common/Preloader/Preloader'
// import { NavLink, Redirect } from 'react-router-dom'

class ProfileContainer extends React.Component {
    refreshProfile () {
        const userId = this.props.match.params.userId || this.props.authId // получаем userId из Match благодаря оборачиванию в withRouter
        if (!userId) this.props.history.push('/login')
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount () {
        this.refreshProfile()
    }

    componentDidUpdate (prevProps, prevState, snapshots) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render () {
        // if(!(this.props.match.params.userId || this.props.userProfile.userId)) return <Redirect to='/login'/>

        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile
                    authId={this.props.authId}
                    userProfile={this.props.userProfile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        authId: state.auth.id,
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        isFetching: state.profilePage.isFetching,
    }
}
export default compose(
    connect(
        mapStateToProps,
        {
            getUserProfile, getUserStatus,
            updateUserStatus, setUserProfileData
        }
    ),
    withRouter,
)
(ProfileContainer)
