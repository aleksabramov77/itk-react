import s from './User.module.css'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
// import { setCurrentUser } from '../../../../redux/profilePage-reducer'

const User = (props) => {
// debugger
    return (
        <div className={s.user}>
            <div className={s.name}>
                <NavLink to={`/profile/${props.userData.id}`}>
                    <img
                        className={s.avatar}
                        alt='userAvatar'
                        src={props.userData.photos.small ? props.userData.photos.small : defaultAvatar}/>
                    <span>{props.userData.name}</span>

                </NavLink>
            </div>

            <div className={s.country}>    {'props.userData.location.country'}    </div>
            <div className={s.city}>    {'props.userData.location.city'}    </div>

            <div className={s.status}>    {props.userData.status}    </div>

            <div className={s.followed}>
                {props.userData.followed ?

                    <button
                        onClick={
                            () => {
                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userData.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b002a8c0-fd20-4af1-ac6c-4e61565825a3'
                                        }
                                    })
                                    .then(response => {
                                            if (response.data.resultCode === 0) props.unfollow(props.userData.id)
                                        }
                                    )
                            }
                        }
                        className={s.followButton}
                    >
                        Unfollow
                    </button>
                    :
                    <button
                        onClick={
                            () => {
                                axios
                                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userData.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b002a8c0-fd20-4af1-ac6c-4e61565825a3'
                                        }
                                    })
                                    .then(response => {
                                            if (response.data.resultCode === 0) props.follow(props.userData.id)
                                        }
                                    )
                            }
                        }
                        className={s.followButton}
                    >
                        Follow
                    </button>
                }
            </div>
        </div>
    )
}

export default User