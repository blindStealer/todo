import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService.'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

export const PostIdPage = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const params = useParams()

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isLoadingToComments, errorToComments] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])



    return (
        <div>
            {isLoading
                ? <Loader />
                : <div> post id is {post.id}. This is post title:  {post.title} </div>
            }
            <h1>Вы открыли страницу поста c ID = {params.id} </h1>

            <h1>Комментарии:</h1>

            {isLoadingToComments
                ? <Loader />
                : <div>
                    {comments.map((comment) => {
                        return <div>
                            <h5>{comment.postId}.</h5>
                            <h5>{comment.name}</h5>
                            <h5>{comment.email}</h5>
                            <h5>{comment.body}</h5>
                        </div>
                    })}
                </div>
            }



        </div>
    )
}
