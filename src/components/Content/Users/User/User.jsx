import s from './User.module.css'
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'
import { NavLink } from 'react-router-dom'
// import { setCurrentUser } from '../../../../redux/profilePage-reducer'


const User = (props) => {

    return (
        <div className={s.user}>
            <div className={s.name}>
                <NavLink to={`/profile/${props.userData.id}`}>
                    <img
                        // onClick={() => setCurrentUser(props.userData.id)}
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
                <button onClick={() => props.changeFollowing(props.userData.id)}
                        className={s.followButton}>{props.userData.followed === true ? 'UnFollow' : 'Follow'}</button>
            </div>
        </div>
    )
}

export default User