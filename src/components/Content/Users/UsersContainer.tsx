import React from 'react'
import {connect} from 'react-redux'
import {
  setCurrentPage, requestUsers, unfollowUser, followUser,
  SetCurrentPageActionType,
} from '../../../redux/usersPageReducer'
import Users from './Users'
import {
  getCurrentPage, getFollowingInProgress,
  getIsAuth,
  getTotalUsersCount, getUsers,
  getUsersOnPage,
} from '../../../redux/usersSelectors'
import {UserType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";


type MapStateToPropsType = {
  users: Array<UserType>
  isAuth: boolean
  totalUsersCount: number
  usersOnPageCount: number
  currentPageNumber: number
  followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
  setCurrentPage: (currentPage: number) => SetCurrentPageActionType
  requestUsers: (usersOnPage: number, page: number) => void
  unfollowUser: (userId: number) => void
  followUser: (userId: number) => void
}
type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {usersOnPageCount, currentPageNumber} = this.props
    this.props.requestUsers(usersOnPageCount, currentPageNumber)
  }

  onPageChanged = (pageNumber: number) => {
    const {usersOnPageCount} = this.props
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(usersOnPageCount, pageNumber)
  }

  render() {
    // console.log('RENDER')
    return (
      <Users
        {...this.props}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
  return ({
    users: getUsers(state),
    isAuth: getIsAuth(state),
    totalUsersCount: getTotalUsersCount(state),
    usersOnPageCount: getUsersOnPage(state),
    currentPageNumber: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
  })
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  setCurrentPage, requestUsers, unfollowUser, followUser
})(UsersContainer)