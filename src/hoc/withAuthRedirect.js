import { Redirect } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

export const withAuthRedirect = Component => {
    // class RedirectComponent extends React.Component {    // Реализация HOC через классовую компоненту
    //
    //     render () {
    //         // debugger
    //         if (!this.props.isAuth) return <Redirect to='/login'/>
    //
    //         return <Component {...this.props}/>
    //     }
    // }

    const RedirectComponent = props =>
        props.isAuth
            ? <Component {...props}/>
            : <Redirect to='/login'/>

    const mapStateToPropsForAuthRedirect = state => ({
        isAuth: state.auth.isAuth
    })
    const ConnectedRedirectComponent = connect(mapStateToPropsForAuthRedirect)(RedirectComponent)

    return ConnectedRedirectComponent
}