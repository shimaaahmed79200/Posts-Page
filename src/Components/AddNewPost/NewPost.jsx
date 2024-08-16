import { useState } from "react";
import "./NewPost.css";
function NewPost(props) {
  const [inputvalue, setInputValue] = useState("");


  function handleSendPost() {
    props.AddnewPostInsideArray(inputvalue);
    setInputValue("");
  }


  function handleOnChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div id="SendNewPostSection">
      <input
        placeholder="Send New Post ...."
        id="NewPostField"
        value={inputvalue}
        onChange={handleOnChange}
      ></input>
      <button id="SendNewPost" onClick={handleSendPost}>
        Send
      </button>
    </div>
  );
}

export default NewPost;
