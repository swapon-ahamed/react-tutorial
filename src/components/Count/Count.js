import React,{Component} from 'react';

class Count extends Component{

	constructor(props){
		super(props);
		this.state = {
			count: 0,
			color: 'black'
		}
	}

	colorUpdate = () => {
		if(this.state.count <= 5 ){
			this.setState({
				color: 'red'
			})
		}else if( this.state.count >=15){
			this.setState({
				color:'green'
			})
		}else{
			this.setState({
				color: 'black'
			})
		} 
	}

	decrease = () => {
		this.setState({
			count: this.state.count - 1
		})
		this.colorUpdate() ;
	}

	increase = () => {
		this.setState({
			count: this.state.count +1
		})
		this.colorUpdate();
	}

	render(){
		return(
			<>
			<button className="btn btn-primary" onClick={this.decrease} > - </button>
			<span style={{ color: this.state.color }}> { this.state.count } </span>
			<button className="btn btn-primary" onClick={this.increase}> + </button>
			</>
		)
	}
}


export default Count;
