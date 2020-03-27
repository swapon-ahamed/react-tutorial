import React,{Component} from 'react';

class Book extends Component{

	state = {
		isEditable: false
	}

	changeKeyHandeler = (event) => {
		if(event.key === 'Enter'){
			this.setState({
				isEditable: false
			})
		}
	}

	render(){
		let outPutBookName = this.state.isEditable ? 
							 <input onChange={ (e) => this.props.changeHandeler(e.target.value, this.props.book.id) } 
							 		onKeyPress={ this.changeKeyHandeler }
							 		key={this.props.book.id} className="form-control" name="book_name" value={this.props.book.name}/> 
							 : <p>{this.props.book.name}</p>
		return(
			<>
			 <li className="list-group-item d-flex" key={this.props.book.id}>
				{outPutBookName}
				<span className="ml-auto">${this.props.book.price}</span>
				<div  className="mx-4"  >
					<span onClick={ () => this.setState({isEditable:true}) } style={{cursor:'pointer'}} >Edit<i className="far fa-edit"></i></span>
					<span onClick={ ()=> this.props.deleteHandeler(this.props.book.id) } style={{cursor:'pointer'}}>Delete <i className="fas fa-trash"></i></span>
				</div>
				 </li>
			</>
		);
	}
}


export default Book;
