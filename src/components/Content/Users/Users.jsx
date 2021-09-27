import React from 'react'
import User from './User/User'
import * as axios from 'axios'
import s from './Users.module.css'

class Users extends React.Component {
    componentDidMount () {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render () {
        let pagesQuantity = Math.ceil(this.props.totalUsersCount / this.props.usersOnPage)
        let pageNumbersArray = [1]
        if (this.props.currentPage < 4) for (let i = 2; i <= 6; i++) pageNumbersArray.push(i)
        else if (this.props.currentPage > pagesQuantity - 4) for (let i = pagesQuantity - 5; i < pagesQuantity; i++) pageNumbersArray.push(i)
        else for (let i = this.props.currentPage - 2; i <= this.props.currentPage + 2; i++) pageNumbersArray.push(i)
        pageNumbersArray.push(pagesQuantity)
        return (
            <div>
                <div className={s.pageSelector}>
                    {pageNumbersArray.map(p => (
                        <button
                            key={p}
                            className={p == this.props.currentPage && s.currentPage}
                            onClick={(e) => this.onPageChange(p)}>
                            {p}
                        </button>))}
                </div>
                {this.props.users.map(u => <User
                    key={u.id} userData={u}
                    changeFollowing={this.props.changeFollowing}/>)}
            </div>)
    }
}

export default Users