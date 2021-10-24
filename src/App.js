import React from 'react'
import s from './App.module.css'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import HeaderContainer from './components/Header/HeaderContainer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'


class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert(`unhandled error is catched: ${reason}`)
        console.error(reason, promise)
    }

    componentDidMount () {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount    () {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render () {
        if (!this.props.initialized) return <Preloader />
        return (
            // <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HashRouter>
                <div className={s.appWrapper}>
                    <div className={s.block + ' ' + s.header}><HeaderContainer/></div>
                    <div className={s.block + ' ' + s.navbar}><Navbar/></div>
                    <div className={s.block + ' ' + s.content}><Content/></div>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default compose(
    // withRouter,
    connect(
        mapStateToProps,
        {
            initializeApp
            // getAuthUserData,
        }
    )
)
(App)

