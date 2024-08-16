import { useState } from "react";
import "./Post.css";
import AddnewComment from "../AddNewComment/AddNewComment";
import CommentsWrapper from "../CommentsWrapper/CommentsWrapper";
import girl from '../../../public/assets/girl.jpg';

function Post(props) {

  const [showReplayDiv, setShowReplayDiv] = useState(false);
  const [count, setCount] = useState(props.likes);
  const [postId] = useState(props.UniqueID);
  function Plus() {
    const newValue = count + 1;
    setCount(newValue);
  }

  function Minus() {
    const newValue = count - 1;
    setCount(newValue);
  }

  function HandleDelete() {
    props.delteItem(postId);
  }

  function HandleReplayBtn() {
    let finalResult = !showReplayDiv;
    setShowReplayDiv(finalResult);
  }

  function HideReplaySection() {
    setShowReplayDiv(false);
  }

  return (
    <div className="PostWrapper">
      <div className="Post">
        <div className="CounterWrapper">
          <button onClick={Plus}>+</button>
          <span>{count}</span>
          <button onClick={Minus}>-</button>
        </div>
        <img src={girl} />
        <span>{props.time}</span>
        <p>{props.content}</p>
        {props.username == "maxblagun" ? (
          <button className="DeleteBtns" onClick={HandleDelete}>
            Delete
          </button>
        ) : null}
        <button onClick={HandleReplayBtn} className="replay">Replay</button>
      </div>
      <CommentsWrapper
        postid={props.UniqueID}
        AllComments={props.comments}
        deleteComment={props.deleteComment}
        updateComment={props.updateComment}
      ></CommentsWrapper>
      {showReplayDiv == true ? (
        <AddnewComment
          HideReplaySection={HideReplaySection}
          addNewComment={props.addNewComment}
          UniqueID={props.UniqueID}
        ></AddnewComment>
      ) : null}
    </div>
  );
}


export default Post;
