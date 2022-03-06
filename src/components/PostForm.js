import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ addPost }) => {

    const [post, setPost] = useState({ title: '', body: '' })



    const onTitleChange = (e) => {
        setPost({
            ...post,
            title: e.target.value
        })
    }

    const onBodyChange = (e) => {
        setPost({
            ...post,
            body: e.target.value
        })
    }

    const addNewPost = (e) => {
        e.preventDefault()
        let newPost = {
            // title: post.title,
            // body: post.body,
            ...post,

            id: Date.now()
        }
        addPost(newPost)
        setPost({ title: '', body: '' })
    }




    return (
        <form action="">
            <MyInput
                type="text"
                placeholder={'Название поста'}
                value={post.title}
                onChange={onTitleChange}
            />
            <MyInput
                type="text"
                placeholder={'Описание поста'}
                value={post.body}
                onChange={onBodyChange}
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    )
}

export default PostForm