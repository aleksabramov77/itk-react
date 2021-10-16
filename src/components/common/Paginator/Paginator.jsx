import s from './Paginator.module.css'
import React, { useEffect, useState } from 'react'

const Paginator = ({
    totalItemsCount, itemsOnPage = 10, currentPage = 1, pagesOnScreen = 10,
    onPageChanged
}) => {
    const pagesQuantity = Math.ceil(totalItemsCount / itemsOnPage)
    const portionsQuantity = Math.ceil(pagesQuantity / pagesOnScreen)
    if (pagesQuantity < pagesOnScreen) pagesOnScreen = pagesQuantity
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / pagesOnScreen) || 1)
    useEffect(()=>{setPortionNumber( Math.ceil(currentPage / pagesOnScreen) )}, [totalItemsCount])
    const pageNumbersArray = []
    for (let i = (portionNumber - 1) * pagesOnScreen + 1;
        i <= Math.min(pagesQuantity, portionNumber * pagesOnScreen);
        i++) pageNumbersArray.push(i)

    return (
        <div className={s.pageSelector}>

            <button
                className={`${s.pageNumberButton} ${s.arrowButton}`}
                disabled={portionNumber <= 1}
                onClick={() => setPortionNumber(1)}
            > {'<<'} </button>

            <button
                className={`${s.pageNumberButton} ${s.arrowButton}`}
                disabled={portionNumber <= 1}
                onClick={() => setPortionNumber(portionNumber - 1)}
            > {'<'} </button>

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

            <button
                className={`${s.pageNumberButton} ${s.arrowButton}`}
                disabled={portionNumber >= portionsQuantity}
                onClick={() => setPortionNumber(portionNumber + 1)}
            > {'>'} </button>

            <button
                className={`${s.pageNumberButton} ${s.arrowButton}`}
                disabled={portionNumber >= portionsQuantity}
                onClick={() => setPortionNumber(Math.ceil(pagesQuantity / pagesOnScreen))}
            > {'>>'} </button>
        </div>)
}

export default Paginator