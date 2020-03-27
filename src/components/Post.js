import React from 'react';

const Post = ({match}) => {
    return (
        <h3>Post Id: {match.params.postId}</h3>
    )
}

export default Post;