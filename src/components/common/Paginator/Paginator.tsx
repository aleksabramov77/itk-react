import s from './Paginator.module.css'
import React, {useEffect, useState} from 'react'


type PropsType = {
  totalItemsCount: number
  itemsOnPageCount: number
  currentPageNumber: number
  pagesOnScreenCount?: number
  onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = (
  {
    totalItemsCount, itemsOnPageCount = 10,
    currentPageNumber = 1, pagesOnScreenCount = 10,
    onPageChanged
  }) => {
  const pagesQuantity: number = Math.ceil(totalItemsCount / itemsOnPageCount)
  const portionsQuantity: number = Math.ceil(pagesQuantity / pagesOnScreenCount)
  if (pagesQuantity < pagesOnScreenCount) pagesOnScreenCount = pagesQuantity
  let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPageNumber / pagesOnScreenCount) || 1)

  const pageNumbersArray: Array<number> = []
  for (let i = (portionNumber - 1) * pagesOnScreenCount + 1;
       i <= Math.min(pagesQuantity, portionNumber * pagesOnScreenCount);
       i++) pageNumbersArray.push(i)

  useEffect(() => {
    setPortionNumber(Math.ceil(currentPageNumber / pagesOnScreenCount))
  }, [currentPageNumber, pagesOnScreenCount])

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
          disabled={currentPageNumber === p}
          className={`${s.pageNumberButton}  ${p === currentPageNumber ? s.currentPageNumber : ''}`}
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
        onClick={() => setPortionNumber(Math.ceil(pagesQuantity / pagesOnScreenCount))}
      > {'>>'} </button>
    </div>)
}

export default Paginator