import React from 'react'
import User from './User/User'
import * as axios from 'axios'

class Users extends React.Component {
    componentDidMount () {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }
    render () {
        return (
            <div>
                {this.props.users.map(u => <User
                    key={u.id} userData={u}
                    changeFollowing={this.props.changeFollowing}/>)}
            </div>)
    }
}

export default Users