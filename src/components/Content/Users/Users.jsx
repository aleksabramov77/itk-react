// import React from 'react'
import User from './User/User'
import * as axios from 'axios'

const Users = (props) => {
    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             followed: false,
    //             name: 'Tatiana',
    //             photos: {
    //                 small: 'https://sun9-16.userapi.com/impg/XS1IlMAFGmZhn7VN7ZK8PgjG0bNzrk9duv-YcQ/LRftUmte2c4.jpg?size=810x1080&quality=96&sign=8ba0ed393577065ee17f42c942728519&type=album',
    //                 large: null
    //             },
    //             location: {
    //                 country: 'Belarus',
    //                 city: 'Minsk'
    //             },
    //             status: 'I like children !!!'
    //         },
    //         {
    //             id: 2,
    //             followed: true,
    //             name: 'Natasha',
    //             photos: {
    //                 small: 'https://uralmotorsport.ru/wp-content/uploads/2018/02/default-avatar-f_1920.png',
    //                 large: null
    //             },
    //             location: {
    //                 country: 'Russia',
    //                 city: 'Penza'
    //             },
    //             status: 'I am a boss !!!'
    //         },
    //         {
    //             id: 3,
    //             followed: false,
    //             name: 'Egor',
    //             photos: {
    //                 small: 'https://previews.123rf.com/images/sonsedskaya/sonsedskaya1610/sonsedskaya161000024/65029936-portrait-of-funny-cat-scottish-fold-closeup-isolated-on-white-background.jpg',
    //                 large: null
    //             },
    //             location: {
    //                 country: 'Ukraine',
    //                 city: 'Kiev'
    //             },
    //             status: 'I am a cat !!!'
    //         }
    //         ])
    // }

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items)
            )
    }

    let users = props.users.map(u => <User
        key={u.id} userData={u} changeFollowing={props.changeFollowing}/>)

    return (
        <div>
            {users}
        </div>
    )
}

export default Users