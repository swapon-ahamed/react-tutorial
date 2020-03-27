import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <h1>{this.props.page}: Welcome to React Application</h1>
            <p>
                <Link to="/post/1">Post One</Link>
            </p>
            <p>
                <Link to="/post/2">Post Two</Link>
            </p>
            <p>
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </>
        )
    }
}

export default Home;