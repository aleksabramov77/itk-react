import { Redirect } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

export const withAuthRedirect = Component => {

    class RedirectComponent extends React.Component {    // Реализация HOC через классовую компоненту
        render = () =>
            this.props.isAuth
                ? <Component {...this.props}/>
                : <Redirect to='/login'/>
    }

    // const RedirectComponent = props =>        // Реализация HOC через функциональную компоненту
    //     props.isAuth
    //         ? <Component {...props}/>
    //         : <Redirect to='/login'/>

    const mapStateToPropsForAuthRedirect = state => ({
        isAuth: state.auth.isAuth
    })

    return connect(mapStateToPropsForAuthRedirect)(RedirectComponent)
}