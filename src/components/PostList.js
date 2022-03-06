import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, removePost }) => {
    return (
        <div>
            <h1>Список постов {posts.length} </h1>
            {posts.map((post, idx) => {
                return <PostItem post={post} key={post.id} number={idx} removePost={removePost} />
            })}
        </div>
    )
}

export default PostList