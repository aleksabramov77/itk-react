import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {                           // локальный стэйт  классовой компоненты
        editMode: false
    }

    activateEditMode () {
        this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
            editMode: true
        })
    }

    deactivateEditMode () {
        this.setState({           // метод Реакта изменяющий локальный стэйт классовой компоненты
            editMode: false
        })
    }

    render () {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input className={s.statusInputBlock}
                               onBlur={this.deactivateEditMode.bind(this)}      /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст */
                               autoFocus={true}                                 /* автофокус на элементе */
                               value={this.props.status}/>
                    </div>
                    : <div className={s.statusBlock}
                           onDoubleClick={this.activateEditMode.bind(this)}     /* событие при убирании фокуса с элемента. bind - т.к. иначе теряется контекст  */
                    >
                        <span>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus