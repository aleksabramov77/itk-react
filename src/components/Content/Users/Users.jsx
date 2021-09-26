// import React from 'react'
import User from './User/User'
import * as axios from 'axios'

const Users = (props) => {
    function getUsers() {
        if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.setUsers(response.data.items)
                )
        }
    }

    let users = props.users.map(u => <User
        key={u.id} userData={u} changeFollowing={props.changeFollowing}/>)

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {users}
        </div>
    )
}

export default Users