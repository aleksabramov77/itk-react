import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {                           // локальный стэйт  классовой компоненты
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = e => {
        this.setState({ status: e.currentTarget.value })
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input
                                className={s.statusInputBlock}
                                onChange={this.onStatusChange}
                                autoFocus={true}                                 /* автофокус на элементе */
                                onBlur={this.deactivateEditMode}      /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст */
                                value={this.state.status}/>
                        </div>
                        : <div>
                        <span
                            className={s.statusBlock}
                            onDoubleClick={this.activateEditMode}    /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст  */
                        >
                            {this.props.status || 'No status'}
                        </span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus