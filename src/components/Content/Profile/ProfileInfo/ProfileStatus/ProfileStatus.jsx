import React, { useEffect, useState } from 'react'
import s from './ProfileStatus.module.css'
// import { createStore } from 'redux'

const ProfileStatus = props => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.authId === props.userId) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = e => {
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


// class ProfileStatus extends React.Component {
//     state = {                           // локальный стэйт  классовой компоненты
//         editMode: false,
//         status: this.props.status,
//     }
//
//     activateEditMode = () => {
//         if (this.props.authId === this.props.userId) {
//             this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
//                 editMode: true
//             })
//         }
//     }
//
//     deactivateEditMode = () => {
//         this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
//             editMode: false,
//         })
//         this.props.updateUserStatus(this.state.status)
//     }
//
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
