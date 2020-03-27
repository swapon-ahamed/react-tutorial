import React,{Component} from 'react';

class Form extends Component{
	state = {}
	changeHandeler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render(){
		return(
			<div className="mb-5 mt-5">
				
				<p><input className="form-control" name="fname" onChange={this.changeHandeler} type="text"/></p>
				<p><input className="form-control" name="lname" onChange={this.changeHandeler} type="text"/></p>
				<p>First Name: {this.state.fname }</p>
				<p>last Name: {this.state.lname }</p>
				
				
			</div>
		)
	}
}


export default Form;
