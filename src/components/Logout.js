import React, {Component} from 'react';
import Auth from './Auth'
import {Redirect} from 'react-router-dom'

class Logout extends Component {

    componentDidMount(){
        Auth.logout( () => {
            this.setState({
                redirect: true
            })
        } )
    }

    state = {
        redirect: false
    }



    render(){
       
        if(this.state.redirect){
            return <Redirect to="/" />
        }else{
            return <h1>Logout ...</h1>
        }
       
    }
}

export default Logout