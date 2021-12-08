import moment from "moment"
import { XCircle } from "react-feather"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { deleteComment } from "../../actions/commentActions"

interface Props {
    content: string;
    updatedAt:string;
    id:string;
}

const CommentWrapper = styled.div`
    border: 1px dotted rgba(0,0,0,.4);
    width: 100%;
    padding: 20px;
`
const DeleteCommentButton = styled.button`
    background: transparent;
    border: 0;
    outline: 0;
    color: #6d1919;
`
const CommentCard = ({content, updatedAt, id}: Props) => {
    const dispatch = useDispatch();
    return (
        <CommentWrapper>
            <DeleteCommentButton style={{float:'right'}}onClick={()=> deleteComment(id)(dispatch)}><XCircle/></DeleteCommentButton>
            <p>{content}</p>
            {moment(updatedAt).fromNow()}
            
        </CommentWrapper>
    )
}

export default CommentCard
