import React, { Component } from 'react';
import First from './First/First';
import Count from './Count/Count';
import Form from './Form';
import Books from './Books';

class App extends Component {

	
	
	state = {
		persons: [
			{name: 'swapon.ahamed', email: 'swapon.ahamed@gmail.com', phone: '979759345847'},
			{name: 'Akatruzzaman', email: 'swapon@gmail.com', phone: '000000'}
		],
		books: [
			{
				id: 1,
				name: 'javascript',
				price: 30
			},
			{
				id: 2,
				name: 'React',
				price: 40
			},
			{	
				id: 3,
				name: 'Redux',
				price: 50
			},
			{	
				id: 4,
				name: 'React Native',
				price: 60
			}
		]
	}


	deleteHandeler = (id) => {
		let newBooks = this.state.books.filter( bk => bk.id !== id );
		this.setState({
			books: newBooks
		})
	}

	changeHandeler =(name,id) => {
		let newBooks = this.state.books.map( book => {
			if(book.id === id ){
				return {
					...book,
					name
				}
			}
			return book;
		})

		this.setState({
			books: newBooks
		})
	}

	render(){
		return (

			<>
				<h1>React - Redux Application</h1>
				{this.state.persons.map( (people, index) => {
					return <First
						key={index} 
						name={people.name} 
						email={people.email}
						phone={people.phone}

					/>
				} )}	
				<Count />,
				<Form />,
				<Books changeHandeler={this.changeHandeler.bind(this)} 
					deleteHandeler={this.deleteHandeler.bind(this)} 
					books={this.state.books}
				/>
			</> 
		);
	}
}

export default App;
