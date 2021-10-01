import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import Preloader from '../../common/Preloader/Preloader'
import { getUserProfile } from '../../../redux/profilePage-reducer'
import { withRouter } from 'react-router'

class ProfileContainer extends React.Component {
    componentDidMount () {
        this.props.getUserProfile(this.props.match.params.userId, this.props.authId) // получаем userId из Match благодаря оборачиванию в withRouter
    }

    render () {
        // debugger
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
    }
}

export default connect(mapStateToProps, {
    getUserProfile
})(withRouter(ProfileContainer))
