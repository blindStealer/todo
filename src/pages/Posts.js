import React, { useEffect, useState } from 'react'
import PostService from '../API/PostService.'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/Loader/Loader'
import MyModal from '../components/UI/myModal/MyModal'
import { Pagination } from '../components/UI/pagination/Pagination'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import '../styles/App.css'
import { getPageCount, } from '../utils/pages'



const Posts = () => {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [visible, setVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)




    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    console.log(totalPages)
    useEffect(() => {
        fetchPosts()
    }, [page])


    const addPost = (newPost) => {
        setPosts([...posts, newPost])
        setVisible(false)
    }

    const removePost = (postID) => {
        setPosts([...posts].filter((post) => {
            return post.id !== postID
        }))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className='App'>
            <MyButton onClick={fetchPosts}>Add posts</MyButton>
            <MyButton onClick={() => setVisible(true)} style={{ marginTop: 15 }} >
                Написать пост
            </MyButton>

            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm addPost={addPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} />
            {postError
                ? <h1>Произошла ошибка ${postError}</h1>
                : null

            }
            {isPostLoading
                ? <Loader />
                : <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
            }

            <Pagination totalPages={totalPages} changePage={changePage} page={page} />

        </div>
    )
}


export default Posts