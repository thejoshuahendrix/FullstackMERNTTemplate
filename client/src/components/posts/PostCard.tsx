import CommentCard from "../comment/CommentCard"
import { Comment } from '../../types/Comment'
import AddComment from "../comment/AddComment"
import styled from "styled-components"
import { deletePost } from "../../actions/postActions"
import { useDispatch } from "react-redux"
import moment from "moment"
import { Delete } from "react-feather"
import { useState } from "react"

interface Props {
    content: string;
    author: string;
    user: string;
    comments: Comment[];
    createdAt: string;
    id: string;
}
const CommentCardsWrapper = styled.div`
    width: 90%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const AddCommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 40px;
`
const PostCardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  min-height: 300px;
  min-width: 600px;
  max-width: 100%;
  padding: 20px;
  gap:10px;
  color: ${({ theme }) => theme.text.primary};
  border: 1px dotted rgba(0,0,0,.5);
  border-radius: ${({ theme }) => theme.card.borderRadius};
`

const DateWrapper = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
`
const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`
const DeleteButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

`
const DeletePostButton = styled.button`
    background: transparent;
    outline: 0;
    border: 0;
    color: #6d1919;
`
const PostCard = ({ user, author, content, comments, createdAt, id }: Props) => {
    const dispatch = useDispatch();
    const [error, setError] = useState('')
    const handleDelete = (id: string) => {
        if (user === author) {
            deletePost(id)(dispatch)
        }
    }

    return (
        <PostCardWrapper>
            {author}

            {user === author && <DeleteButtonWrapper>
                <div className="tooltip">
                    <DeletePostButton onClick={() => handleDelete(id)}><Delete /></DeletePostButton>
                    <span className="tooltiptext" onClick={() => handleDelete(id)}>Delete Post</span>
                </div>
            </DeleteButtonWrapper>}
            <DescriptionWrapper>{content}</DescriptionWrapper>
            <DateWrapper>{moment(createdAt).fromNow()}</DateWrapper>

            <CommentCardsWrapper>
                {comments.map(comment => <CommentCard id={comment._id || ''} user={user} author={comment.author} content={comment.content} updatedAt={comment.updatedAt || ""} />)}
            </CommentCardsWrapper>
            <AddCommentWrapper>
                <AddComment user={user} author={author} id={id} />
            </AddCommentWrapper>
        </PostCardWrapper>
    )
}

export default PostCard
