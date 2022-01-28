import CommentMessage from "./comment-message/comment-message";
import CommentActions from "./comment-actions/comment-actions";
import CommentBid from "./comment-bid/comment-bid";

import classes from "./comment-content.module.css";


const CommentContent = ({commentId, authorId, itemType, message, repScore, replyId, bidPrice, refetchUser, setReplyToId, usersData}) => {
    return (
        <div className={classes.content}>
            {
                itemType === 'comment'
                    ? <CommentMessage message={message} replyId={replyId} usersData={usersData}/>
                    : <CommentBid bid={bidPrice}/>
            }
            <CommentActions commentId={commentId} authorId={authorId} repScore={repScore} setReplyToId={setReplyToId} refetchUser={refetchUser}/>
        </div>
    )
}

export default CommentContent;