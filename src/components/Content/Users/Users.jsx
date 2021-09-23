// import React from 'react'
import User from './User/User'

const Users = (props) => {
    debugger

    if (props.users.length === 0) {
        props.functions.setUsers([
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
            },])
    }
    debugger

    let users = props.users.map(u => <User
        key={u.id} userData={u} changeFollowing={props.functions.changeFollowing}/>)

    return (
        <div>
            {users}
        </div>
    )
}

export default Users