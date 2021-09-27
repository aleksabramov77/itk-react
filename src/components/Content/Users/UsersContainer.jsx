// import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { changeFollowingAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from '../../../redux/usersPage-reducer'

let mapStateToProps = state => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    usersOnPage: state.usersPage.usersOnPage,
    currentPage: state.usersPage.currentPage,
})

let mapDispatchToProps = dispatch => ({
    changeFollowing: userId => dispatch(changeFollowingAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountAC(totalUsersCount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)