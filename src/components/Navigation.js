import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Auth from './Auth'

class Navigation extends Component{

    render(){
        return(

            <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/bio">Add Bio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/post/123">Post</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
            
            { Auth.isLogin &&  <li className="nav-item"><NavLink className="nav-link" to="/logout">Logout</NavLink> </li> }
                
            
            </ul>


        )
    }
}

export default Navigation;