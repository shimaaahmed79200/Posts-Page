import { useState } from "react";
import max from '../../../public/assets/max.jpg';
function Comment({ comment, postid, deleteComment, updateComment }) {
  const [showEditSection, setShowEditSection] = useState(false);
  const [inputValue, setInputValue] = useState(comment.commentContent);

  const [postId] = useState(postid);
  const [commentId] = useState(comment.commentid);


  function handleDeleteComment() {
    deleteComment(postId, commentId);
  }

  function handleEditComment() {
    const neweditSectionValue = !showEditSection;
    setShowEditSection(neweditSectionValue);
  }

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }

  function handleUpdateButton() {
    setShowEditSection(false);
    updateComment(inputValue, postId, commentId);
  }
  
  return (
    <div className="Comment">
      <img src={max} />
      {showEditSection == true ? (
        <>
          <input value={inputValue} onChange={handleOnChange}></input>
          <button onClick={handleUpdateButton}>Update</button>
        </>
      ) : (
        <p>{comment.commentContent}</p>
      )}

      <button className="delcom" onClick={handleDeleteComment}>Delete</button>

      <button onClick={handleEditComment}>Edit</button>
    </div>
  );
}

export default Comment;
