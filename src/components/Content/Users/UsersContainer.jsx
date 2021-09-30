import React from 'react'
import { connect } from 'react-redux'
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching,
} from '../../../redux/usersPage-reducer'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { usersAPI } from '../../../api/api'

class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.toggleFetching(true)

        usersAPI.getUsers(this.props.usersOnPage, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

                this.props.toggleFetching(false)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        this.props.toggleFetching(true)
        // console.log(this.props.currentPage)

        usersAPI.getUsers(this.props.usersOnPage, pageNumber)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

                this.props.toggleFetching(false)
            })
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
    isFetching: state.usersPage.isFetching,
})

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFetching,
    })(UsersContainer)