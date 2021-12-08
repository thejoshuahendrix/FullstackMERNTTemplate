import CommentCard from "../comment/CommentCard"
import { Comment } from '../../types/Comment'
import AddComment from "../comment/AddComment"
import styled from "styled-components"
import { deletePost } from "../../actions/postActions"
import { useDispatch } from "react-redux"
import moment from "moment"

interface Props {
    title: string;
    description: string;
    done: boolean;
    comments: Comment[];
    createdAt: string;
    id: string;
}
const CommentCardsWrapper = styled.div`
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
`
const PostCardWrapper = styled.div<{ done: boolean }>`
display: flex;
flex-direction: column;
align-items: center;
  min-height: 300x;
  max-width: 900px;
  padding: 20px;
  gap:10px;
  ${({ done }) => done ? "border-left: 2px solid green" : ""};
  border: 1px dotted rgba(0,0,0,.1);
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
const PostCard = ({ title, description, done, comments, createdAt, id }: Props) => {
    const dispatch = useDispatch();

    return (
        <PostCardWrapper done={done}>
            <DeleteButtonWrapper><button onClick={() => deletePost(id)(dispatch)}>X</button></DeleteButtonWrapper>
            <h1>{title}</h1>
            <DescriptionWrapper>{description}</DescriptionWrapper>
            <DateWrapper>{moment(createdAt).fromNow()}</DateWrapper>
            <CommentCardsWrapper>
                {comments.map(comment => <CommentCard id={comment._id || ''} title={comment.title} description={comment.description} updatedAt={comment.updatedAt || ""} />)}
            </CommentCardsWrapper>

            <AddComment id={id} />

        </PostCardWrapper>
    )
}

export default PostCard
