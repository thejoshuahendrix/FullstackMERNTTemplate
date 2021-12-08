import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addPost } from '../../actions/postActions'


const AddPostForm = styled.form`
    background: ${({theme})=> theme.background.secondary};
    border-radius:  ${({theme})=> theme.card.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme})=> theme.text.secondary};
`
const AddPostButton = styled.button`
    background: ${({theme})=> theme.button.background};
    border-radius: ${({theme})=> theme.card.borderRadius};
`
const PostInput = styled.input`
    width:80%;
`

const AddPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [done, setDone] = useState(false);
    let post = { title, description, done };
    return (
        <div>
            <AddPostForm id="Post-form">
                <label>Title</label>
                <PostInput type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>
                <PostInput type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Done?</label>
                <PostInput type='checkbox' name='done' checked={done} onChange={(e) => setDone(e.target.checked)} />
                <AddPostButton onClick={(e) => { e.preventDefault(); addPost(post)(dispatch);setDescription('');setTitle('');setDone(false)}}>Add Post</AddPostButton>

            </AddPostForm>
        </div>
    )
}

export default AddPost
