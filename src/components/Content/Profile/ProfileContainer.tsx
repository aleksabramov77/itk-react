import React from 'react'
import {
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import Profile from './Profile'
import {
  getUserProfile,
  getUserStatus,
} from '../../../redux/profilePageReducer'
import Preloader from '../../common/Preloader/Preloader'
import {AppStateType} from "../../../redux/redux-store";



const ProfileContainer: React.FC<any> = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const match: any = useRouteMatch();
  const authId = useSelector((state: AppStateType) => state.auth.id)
  const isFetching = useSelector((state: AppStateType) => state.app.isFetching)
  const userId = match.params.userId || authId // получаем userId из Match благодаря оборачиванию в withRouter

  const refreshProfile = () => {
    if (!userId) {
      history.push('/login')
    } else {
      dispatch(getUserProfile(userId))
      dispatch(getUserStatus(userId))
    }
  }

  React.useEffect(() => {
    refreshProfile()
  }, [userId])

  const isOwner = !match.params.userId || match.params.userId === authId

  return (
    <div>
      {isFetching ? <Preloader/> : null}
      <Profile
        isOwner={isOwner}
      />
    </div>
  )
}

export default ProfileContainer


// type PropsType = {
//   authId: number
//   userProfile: UserProfileType
//   isFetching: boolean
//   match: any
//   history: any
//
//   getUserProfile: (userId: number) => void
//   getUserStatus: (userId: number) => void
// }
//
// class ProfileContainer extends React.Component<PropsType> {
//   refreshProfile() {
//     const userId = this.props.match.params.userId || this.props.authId // получаем userId из Match благодаря оборачиванию в withRouter
//     if (!userId) {
//       this.props.history.push('/login')
//     } else {
//       this.props.getUserProfile(userId)
//       this.props.getUserStatus(userId)
//     }
//   }
//
//   componentDidMount() {
//     this.refreshProfile()
//   }
//
//   componentDidUpdate(prevProps: PropsType) {
//     if (prevProps.match.params.userId !== this.props.match.params.userId) {
//       this.refreshProfile()
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         {this.props.isFetching ? <Preloader/> : null}
//         <Profile
//           authId={this.props.authId} userProfile={this.props.userProfile}
//           isOwner={!this.props.match.params.userId || +this.props.match.params.userId === +this.props.authId}
//         />
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state: AppStateType) => {
//   return {
//     authId: state.auth.id,
//     userProfile: state.profilePage.userProfile,
//     status: state.profilePage.status,
//     isFetching: state.app.isFetching
//   }
// }
// export default compose(
//   connect(
//     mapStateToProps,
//     {
//       getUserProfile, getUserStatus
//     }
//   ),
//   withRouter
// )
// (ProfileContainer)

