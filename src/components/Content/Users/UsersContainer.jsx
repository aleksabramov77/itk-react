import React from 'react'
import { connect } from 'react-redux'
import {
    setCurrentPage,
    requestUsers, unfollowUser, followUser,
} from '../../../redux/usersPageReducer'
import Users from './Users'
import {
    getCurrentPage, getFollowingInProgress,
    getIsAuth,
    getTotalUsersCount, getUsers,
    getUsersOnPage,
} from '../../../redux/usersSelectors'


class UsersContainer extends React.Component {
    componentDidMount () {
        const {usersOnPage, currentPage} = this.props
        this.props.requestUsers(usersOnPage, currentPage)
    }

    onPageChanged = pageNumber => {
        const {usersOnPage} = this.props
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(usersOnPage, pageNumber)
    }

    render () {
        // console.log('RENDER')
        return (
            <Users
                {...this.props}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

// let mapStateToProps = state => ({
//     users: state.usersPage.users,
//     isAuth:state.auth.isAuth,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     usersOnPage: state.usersPage.usersOnPage,
//     currentPage: state.usersPage.currentPage,
//     followingInProgress: state.usersPage.followingInProgress,
// })
let mapStateToProps = state => {
    // console.log('MSTP')

    return     ({
        users: getUsers(state),
        isAuth: getIsAuth(state),
        totalUsersCount: getTotalUsersCount(state),
        usersOnPage: getUsersOnPage(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    })
}

export default connect(mapStateToProps, {
    setCurrentPage, requestUsers,
    unfollowUser, followUser,
})(UsersContainer)