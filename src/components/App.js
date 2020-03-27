import React, { Component } from 'react';
import Form from './forms/form';
import Navigation from './Navigation';
import {BrowserRouter,Route,Switch  } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';
import PrivateRoute from './PrivateRoute';
import Login from './Login'
import Logout from './Logout'
  
  


class App extends Component {

	// componentDidMount(){
	// 	axios.get('https://jsonplaceholder.typicode.com/posts')
	// 		.then((response) => {
	// 			this.setState({
	// 				posts: response.data
	// 			})
	// 		})
	// 		.catch(errors => console.log(errors));
	// }


	render(){

		return (
			<div className="container mt-5" >
				<BrowserRouter>
				<div className="card text-center">
					<div className="card-body">
						<Navigation />
						<Switch>
						<Route path="/" exact render={ () => { return <Home page="Home"/> } } />
						<Route path="/bio" component={Form} />
						<PrivateRoute path="/post/:postId" component={Post} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route path="/login" component={Login} />
						<Route path="/logout" component={Logout} />
						</Switch>
                	</div>
				</div>
				</BrowserRouter>

			</div>
		);
	}

}

export default App

//Nested route
// protected route
// public route
