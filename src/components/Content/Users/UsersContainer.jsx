import React from 'react'
import { connect } from 'react-redux'
import {
    setCurrentPage,
    getUsers, unfollowUser, followUser,
} from '../../../redux/usersPage-reducer'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.getUsers(this.props.usersOnPage, this.props.currentPage)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.usersOnPage, pageNumber)
    }

    render () {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    {...this.props}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

let mapStateToProps = state => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    usersOnPage: state.usersPage.usersOnPage,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress,
})

export default connect(mapStateToProps,
    {
        setCurrentPage,
        getUsers,
        unfollowUser,
        followUser,
    })(UsersContainer)