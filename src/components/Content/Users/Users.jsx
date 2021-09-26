// import React from 'react'
import User from './User/User'
import axios from 'axios'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                name: 'Vasily',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                },
                status: 'I like football !!!'
            },
            {
                id: 2,
                followed: true,
                name: 'Petr',
                location: {
                    country: 'Russia',
                    city: 'Penza'
                },
                status: 'I am a boss !!!'
            },
            {
                id: 3,
                followed: false,
                name: 'Egor',
                location: {
                    country: 'Ukraine',
                    city: 'Kiev'
                },
                status: 'I am a cat !!!'
            }
            ])
    }

    // axios
    //     .get('https://social-network.samuraijs.com/api/1.0/users')
    //     .then(response => {
    //         debugger
    //         props.setUsers(response.data.items)
    //     })

    let users = props.users.map(u => <User
        key={u.id} userData={u} changeFollowing={props.changeFollowing}/>)

    return (
        <div>
            {users}
        </div>
    )
}

export default Users