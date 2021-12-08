import moment from "moment"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { deleteComment } from "../../actions/commentActions"

interface Props {
    title: string;
    description:string;
    updatedAt:string;
    id:string;
}

const CommentWrapper = styled.div`
    border: 1px solid black;
    width: 400px;
    padding: 20px;
`

const CommentCard = ({title, description, updatedAt, id}: Props) => {
    const dispatch = useDispatch();
    return (
        <CommentWrapper>
            <h5>{title}</h5>
            <p>{description}</p>
            {moment(updatedAt).fromNow()}
            <button style={{float:'right'}}onClick={()=> deleteComment(id)(dispatch)}>X</button>
        </CommentWrapper>
    )
}

export default CommentCard
