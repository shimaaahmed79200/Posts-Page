import "./CommentsWrapper.css";
import Comment from "../Comment/Comment";
function CommentsWrapper(props) {
  return (
    <div className="CommentsWrapper">
      
      {props.AllComments.map((comment) => {
        return (
          <Comment
            key={comment.commentid}
            comment={comment}
            time={props.Time}
            user={props.username}
            photo={comment.photo}
            deleteComment={props.deleteComment}
            postid={props.postid}
            updateComment={props.updateComment}
          ></Comment>
        );
      })}
    </div>
  );
}

export default CommentsWrapper;
