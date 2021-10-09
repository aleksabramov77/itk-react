import React from 'react'
import s from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import HeaderContainer from './components/Header/HeaderContainer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'


class App extends React.Component {
    componentDidMount () {
        this.props.initializeApp()
    }

    render () {
        if (!this.props.initialized) return <Preloader />
        // debugger
        return (
            <BrowserRouter>
                <div className={s.appWrapper}>
                    <div className={s.block + ' ' + s.header}><HeaderContainer/></div>
                    <div className={s.block + ' ' + s.navbar}><Navbar/></div>
                    <div className={s.block + ' ' + s.content}><Content/></div>
                </div>
            </BrowserRouter>
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

