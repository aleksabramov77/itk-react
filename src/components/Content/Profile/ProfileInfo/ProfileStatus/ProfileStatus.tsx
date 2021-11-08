import React, {ChangeEvent} from 'react'
import s from './ProfileStatus.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";
import {updateUserStatus} from "../../../../../redux/profilePageReducer";
// import { createStore } from 'redux'


/* Functional implementation with hooks */
type PropsType = {
  authId: number|null
  userId: number
}
const ProfileStatus: React.FC<PropsType> = ({authId, userId}) => {
  const dispatch = useDispatch()
  const propsStatus = useSelector((state: AppStateType) => state.profilePage.status)

  let [editMode, setEditMode] = React.useState(false)
  let [status, setStatus] = React.useState(propsStatus)

  React.useEffect(() => {
    setStatus(propsStatus)
  }, [propsStatus])

  const activateEditMode = () => {
    if (authId === userId) {
      setEditMode(true)
    }
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    dispatch(updateUserStatus(status))
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {
        editMode
          ? <div>
            <input
              className={s.statusInputBlock}
              onChange={onStatusChange}
              autoFocus={true}                                 /* автофокус на элементе */
              onBlur={deactivateEditMode}      /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст */
              value={status}
            />
          </div>
          : <div>
                            <span
                              className={s.statusBlock}
                              onDoubleClick={activateEditMode}    /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст  */
                            >
                            {status || 'No status'}
                            </span>
          </div>
      }
    </div>
  )
}
export default ProfileStatus

/* Class implementation */
// class ProfileStatus extends React.Component {
//     state = {                           // локальный стэйт  классовой компоненты
//         editMode: false,
//         status: this.props.status,
//     }
//     activateEditMode = () => {
//         if (this.props.authId === this.props.userId) {
//             this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
//                 editMode: true
//             })
//         }
//     }
//     deactivateEditMode = () => {
//         this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
//             editMode: false,
//         })
//         this.props.updateUserStatus(this.state.status)
//     }
//     onStatusChange = e => {
//         this.setState({ status: e.currentTarget.value })
//     }
//
//     componentDidUpdate (prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render () {
//         return (
//             <div>
//                 {this.state.editMode
//                     ? <div>
//                         <input
//                             className={s.statusInputBlock}
//                             onChange={this.onStatusChange}
//                             autoFocus={true}                                 /* автофокус на элементе */
//                             onBlur={this.deactivateEditMode}      /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст */
//                             value={this.state.status}/>
//                     </div>
//                     : <div>
//                         <span
//                             className={s.statusBlock}
//                             onDoubleClick={this.activateEditMode}    /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст  */
//                         >
//                             {this.props.status || 'No status'}
//                         </span>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }
//
// export default ProfileStatus

