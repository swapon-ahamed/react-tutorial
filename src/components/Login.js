import React, {Component} from 'react';
import Auth from './Auth'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        redirect: false
    }

    loginHandeler = () => {
        Auth.login( () => {
            this.setState({
                redirect: true
            })
        } )
    }

    render(){
        if(Auth.isLogin) return <Redirect to="/" />

        let {from} = this.props.location.state || {from: {pathname: '/'} }

        if(this.state.redirect) return <Redirect to={from} />

        return (
            <>
             <div>Please login</div>
             <button onClick={this.loginHandeler}>Login</button>
            </>
        )
    }
}

export default Login