import React from 'react'
import AddPost from '../posts/AddPost'
import PostList from '../posts/PostList'

const PostPage = ({isLoggedIn}: any) => {
    return (
        <div>
            {isLoggedIn &&<PostList />}
        </div>
    )
}

export default PostPage
