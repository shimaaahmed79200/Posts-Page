import { useState } from "react";
import "./AddnewComment.css";

function AddnewComment(props) {
  const [commentInput, setCommentInput] = useState("");
  const [commentId] = useState(props.UniqueID);
  function HandleOnChange(event) {
    setCommentInput(event.target.value);
  }
  function HandleAddNewComment() {
    props.HideReplaySection();
    const id = commentId;
    props.addNewComment(commentInput, id);
    setCommentInput("");
  }
  return (
    <div className="AddNewCommentSection">
      <input
        value={commentInput}
        placeholder="Add new Comment ....."
        onChange={HandleOnChange}
      ></input>
      <button onClick={HandleAddNewComment}>Send New Comment</button>
    </div>
  );
}

export default AddnewComment;
