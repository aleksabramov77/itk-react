import React from 'react'
import s from './User.module.css'

const User = (props) => {

    return (
        <div className={s.user}>
            <div className={s.name}>    {props.userData.name}    </div>

            {/*<div className={s.country}>    {props.userData.location.country}    </div>*/}
            {/*<div className={s.city}>    {props.userData.location.city}    </div>*/}

            <div className={s.status}>    {props.userData.status}    </div>

            <div className={s.followed}>
                <button onClick={() => props.changeFollowing(props.userData.id)}
                        className={s.followButton}>{props.userData.followed === true ? 'UnFollow' : 'Follow'}</button>
            </div>
        </div>
    )
}

export default User