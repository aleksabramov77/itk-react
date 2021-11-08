import React from 'react'
import s from './Preloader.module.css'
import preloader from '../../../assets/images/Spinner-1s-200px.svg'

const Preloader: React.FC = () => {
    return (
        <div>
            <img alt='preloader' className={s.preloader} src={preloader}/>
        </div>
    )
}

export default Preloader