import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/button/MyButton'

const PostItem = ({ post, removePost }) => {

    let navigate = useNavigate()

    const onClickDelete = () => {
        removePost(post.id)
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>

            <div className="post__btns">
                <MyButton onClick={() => navigate(`${post.id}`)} >Открыть</MyButton>
                <MyButton onClick={onClickDelete} >Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem