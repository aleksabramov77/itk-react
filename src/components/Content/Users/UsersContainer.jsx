import React from 'react'
import { connect } from 'react-redux'
import {
    changeFollowingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFetchingAC
} from '../../../redux/usersPage-reducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.toggleFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleFetching(false)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleFetching(false)
            })
    }

    render () {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    usersOnPage={this.props.usersOnPage}
                    currentPage={this.props.currentPage}
                    changeFollowing={this.props.changeFollowing}
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
    isFetching: state.usersPage.isFetching,
})

let mapDispatchToProps = dispatch => ({
    changeFollowing: userId => dispatch(changeFollowingAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountAC(totalUsersCount)),
    toggleFetching: isFetching => dispatch(toggleFetchingAC(isFetching)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)