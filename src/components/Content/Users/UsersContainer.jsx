// import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { changeFollowingAC, setUsersAC } from '../../../redux/usersPage-reducer'

let mapStateToProps = state => ({
    users: state.usersPage.users
})

let mapDispatchToProps = dispatch => ({
    changeFollowing: userId => dispatch(changeFollowingAC(userId)),
    setUsers: users => dispatch(setUsersAC(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)