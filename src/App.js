import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'



const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'яяяя', body: 'бб' },
    { id: 2, title: 'вввввв', body: 'аа' },
    { id: 3, title: 'ааааа', body: 'яя' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      return post.title.includes(filter.query) || post.body.includes(filter.query)
    })

  }, [filter.query, sortedPosts])

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (postID) => {
    setPosts([...posts].filter((post) => {
      return post.id !== postID
    }))
  }



  return (
    <div className='App'>
      <PostForm addPost={addPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length > 0
        ? <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
        : <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
      }

    </div>
  )
}


export default App