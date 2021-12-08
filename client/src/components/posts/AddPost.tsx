import { useState } from 'react'
import { CheckCircle } from 'react-feather'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addPost } from '../../actions/postActions'


const AddPostForm = styled.form`
    background: ${({ theme }) => theme.background.secondary};
    border-radius:  ${({ theme }) => theme.card.borderRadius};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text.secondary};
    min-height: 80px;
`
const AddPostButton = styled.button`
    background: transparent;
    color: ${({theme})=> theme.text.secondary};
    border-radius: ${({ theme }) => theme.card.borderRadius};
    outline: 0;
    border: 0;

`
const PostInput = styled.input`
color:${({theme})=> theme.text.primary};
background: transparent;
    width:40%;
    border: 0;
    border-left: 1px solid black;
    min-height: 40px;
    outline: none;
    &:active{
        border: 0;
        border-left: 1px solid black;
        outline: none;
    }
`



const AddPost = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('')
    
    let post = { content };
    return (
        <>
            <AddPostForm id="Post-form">
                <PostInput placeholder="Whats on your mind?.. "type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)} />
                <AddPostButton onClick={(e) => { e.preventDefault(); addPost(post)(dispatch); setContent('') }}><CheckCircle/></AddPostButton>

            </AddPostForm>
        </>
    )
}

export default AddPost
