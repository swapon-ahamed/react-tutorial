import React,{Component} from 'react';
import Book from './Book';

class Books extends Component{

	render(){
		return(
			<div>
				<h3>Book List</h3>
				<ul className="list-group" >
					{this.props.books.map( book => {
						return (<Book deleteHandeler={this.props.deleteHandeler} 
						key={book.id} 
						book={book}
						changeHandeler={this.props.changeHandeler}
						/>
					)})
				}
				</ul>
			</div>
		);
	}
}


export default Books;
