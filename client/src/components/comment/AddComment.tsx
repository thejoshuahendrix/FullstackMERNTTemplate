import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addComment } from '../../actions/commentActions'

interface Props {
    id: string;
}

const CommentInputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background: ${({theme})=> theme.text.ternary};
    width: 100%;
    gap: 20px;
    color: ${({theme})=> theme.text.secondary};
    border: 1px dotted rgba(0,0,0,.2);
    border-radius: ${({theme})=> theme.card.borderRadius};
    padding:20px;
`
const AddCommentButton = styled.button`
    border-radius: ${({theme})=> theme.card.borderRadius};
    background: ${({theme})=> theme.button.background};
    color: ${({theme})=> theme.button.text};
`

const AddComment = ({ id }: Props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let comment = { title, description, postId: id }
    return (
        <CommentInputWrapper>
                <label>Add Comment:</label>
                <input placeholder="Title" type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description"  name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <AddCommentButton onClick={(e) => { e.preventDefault(); addComment(comment)(dispatch);setDescription('');setTitle('') }}>Add Comment </AddCommentButton>
        </CommentInputWrapper>
    )
}

export default AddComment
