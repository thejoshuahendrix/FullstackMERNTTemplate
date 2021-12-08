import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchPosts } from '../../actions/postActions'
import store from '../../store/createReduxStore'
import { Post } from '../../types/Post'
import AddPost from './AddPost'
import PostCard from './PostCard'

const PostListWrapper = styled.div`
    margin: auto;
    box-shadow: 10px 10px 10px rgba(0,0,0,.1);
    width: fit-content;
    padding: 20px;

`

const PostList = () => {
    const state = store.getState()
    const dispatch = useDispatch();
    const posts = useSelector(fetchPosts)
    return (
        <PostListWrapper>
            <AddPost />
            {state.post.posts.map((post: Post) => <PostCard id={post._id || ""} title={post.title} description={post.description} comments={post.comments || []} createdAt={post.createdAt || ""} done={post.done || false} />)}
        </PostListWrapper>
    )
}

export default PostList
