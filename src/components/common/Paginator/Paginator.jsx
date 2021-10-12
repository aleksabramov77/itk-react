import s from './Paginator.module.css'
import React from 'react'

const Paginator = ({ totalUsersCount, usersOnPage, currentPage, onPageChanged }) => {

    let pagesQuantity = Math.ceil(totalUsersCount / usersOnPage)
    let pageNumbersArray = [1]
    if (currentPage < 4) for (let i = 2; i <= 6; i++) pageNumbersArray.push(i)
    else if (currentPage > pagesQuantity - 4) for (let i = pagesQuantity - 5; i < pagesQuantity; i++) pageNumbersArray.push(i)
    else for (let i = currentPage - 2; i <= currentPage + 2; i++) pageNumbersArray.push(i)
    pageNumbersArray.push(pagesQuantity)

    return (
            <div className={s.pageSelector}>
                {pageNumbersArray.map(p => (
                    <button
                        key={p}
                        disabled={currentPage === p}
                        className={`${s.pageNumberButton}  ${p === currentPage ? s.currentPage : ''}`}
                        onClick={() => onPageChanged(p)}
                    >
                        {p}
                    </button>)
                )}
        </div>)
}

export default Paginator