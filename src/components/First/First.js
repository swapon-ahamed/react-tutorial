import React,{Component} from 'react';

class First extends Component{
	render(){
		return(
			<div className="mb-5">
				<h3>Name: {this.props.name }</h3>
				<p>Email: { this.props.email }</p>
				<p>Phone: { this.props.phone }</p>
			</div>
		)
	}
}


export default First;
