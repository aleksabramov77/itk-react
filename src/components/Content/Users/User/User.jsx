import React from 'react'
import s from './User.module.css'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../../../api/api'

const User = (props) => {
// debugger
    return (
        <div className={s.user}>
            <div className={s.name}>
                <NavLink to={`/profile/${props.userData.id}`}>
                    <img className={s.avatar} alt='userAvatar'
                         src={props.userData.photos.small ? props.userData.photos.small : defaultAvatar}/>
                </NavLink>
                <span>{props.userData.name}<br/>id: {props.userData.id}</span>
            </div>
            <div className={s.country}>    {'props.userData.location.country'}    </div>
            <div className={s.city}>    {'props.userData.location.city'}    </div>
            <div className={s.status}>    {props.userData.status}    </div>

            <div className={s.followed}>
                {props.userData.followed ?
                    <button
                        disabled={props.followingInProgress.some(id => id === props.userData.id)} // проверка id на наличие в текущий мемент запроса на сервер (если есть кнопку Дизэйблим)
                        onClick={() => {
                            props.toggleFollowing(true, props.userData.id) // диспатчим в стор инфу, что начался запрос на сервер и id пользователя, по которому идет запрос
                            usersAPI.unfollowUser(props.userData.id) // запускаем функцию DAL уровня
                                .then(data => {  // получив ответ от сервера ...
                                    if (data.resultCode === 0) {  // проверяем, что статус ОК
                                        props.unfollow(props.userData.id) // диспатчим в стор инфу что мы отписались
                                        props.toggleFollowing(false, props.userData.id)  // диспатчим в стор инфу что сейчвс к серверу идет запрос по юзеру с ID
                                    }
                                })
                        }}
                        className={s.followButton}>
                        Unfollow
                    </button>
                    :
                    <button
                        disabled={props.followingInProgress.some(id => id === props.userData.id)}
                        onClick={() => {
                            props.toggleFollowing(true, props.userData.id)
                            usersAPI.followUser(props.userData.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(props.userData.id)
                                        props.toggleFollowing(false, props.userData.id)
                                    }
                                })
                        }}
                        className={s.followButton}>
                        Follow
                    </button>
                }
            </div>
        </div>
    )
}

export default User