import React from 'react'
import PostItem from './PostItem'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const PostList = ({ posts, removePost }) => {

    if (posts.length === 0) {
        return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
    }

    return (
        <div>
            <h1>Список постов {posts.length} </h1>

            <TransitionGroup>
                {posts.map((post, idx) => {
                    return <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="item"
                    >
                        <PostItem post={post} key={post.id} number={idx} removePost={removePost} />
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div>
    )
}

export default PostList