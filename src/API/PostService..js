import axios from "axios";

const PostService = {
    getAll: async (limit = 10, page = 1) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        return response
    },

    getById: async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    },

    getCommentsById: async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }

}



export default PostService


