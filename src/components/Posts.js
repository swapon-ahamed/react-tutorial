import React, { Component } from 'react';

class Posts extends Component {
  
    render(){
       let posts =this.props.postData;
       if(posts.length === 0){
           return (
            <h3>Loading...</h3>
           )
       }else{
           return(
            <>   
                <h3>Posts</h3>   
                <ul className="list-group">
                { posts.map( post => <li key={post.id}  className="list-group-item">{post.title}</li>) }
                </ul>
             </>
           );
  
       }
        
    }
}

export default Posts;