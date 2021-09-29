import User from './User/User'
import s from './Users.module.css'
import React from 'react'

const Users = (props) => {
        let pagesQuantity = Math.ceil(props.totalUsersCount / props.usersOnPage)
        let pageNumbersArray = [1]
        if (props.currentPage < 4) for (let i = 2; i <= 6; i++) pageNumbersArray.push(i)
        else if (props.currentPage > pagesQuantity - 4) for (let i = pagesQuantity - 5; i < pagesQuantity; i++) pageNumbersArray.push(i)
        else for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) pageNumbersArray.push(i)
        pageNumbersArray.push(pagesQuantity)

    return (
            <div>
                <div className={s.pageSelector}>
                    {pageNumbersArray.map(p => (
                        <button
                                key={p}
                                disabled={props.currentPage === p}
                                className={`${s.pageNumberButton}  ${p === props.currentPage ? s.currentPage : ''}`}
                                onClick={() => props.onPageChanged(p)}
                            >
                                {p}
                            </button>)

                    )}
                </div>
                {props.users.map(u => <User
                    key={u.id} userData={u}
                    follow={props.follow} unfollow={props.unfollow}/>)}
            </div>)
    }

export default Users