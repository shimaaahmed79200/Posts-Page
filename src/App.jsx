import {  useState } from "react";
import "./App.css";
import max from '../public/assets/max.jpg';
import girl from '../public/assets/girl.jpg'
import NewPost from "./Components/AddNewPost/NewPost";
import Post from "./Components/Post/Post";

function App() {
  const [ArrayOfObjects, setArrayOfObjects] = useState([
    
    {
      likes: 12,
      time: '1 month ago',
      photo:<img src={girl}/>,
      content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      id: 2,
      username: "amyrobson",
      comments: [],
    },
    {
      likes: 5,
      time: '2 weeks ago',
      photo:<img src={max}/>,
      content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      id: 1,
      username: "maxblagun",
      comments: [
        {
          likes: 5,
          time: '2 weeks ago',
          photo:{girl},
          commentContent: "@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          commentid: 1,
        },
        {
          likes: 5,
          time: '2 weeks ago',
          photo:{max},
          commentContent: "@ramsesmiron I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/ framework. But the fundamentals are what stay constant.",
          commentid: 2,
        },
        
      ],
    },
    
  ]);


  function addNewPost(PostContent) {

    let newPostObject = {
      likes: 0,
      time: 'Now',
      photo:<img src={girl}/>,
      content: PostContent,
      id: ArrayOfObjects.length + 1,
      username: "maxblagun",
      comments: [],
    };


    let newArrayofobjects = [...ArrayOfObjects, newPostObject];


    setArrayOfObjects(newArrayofobjects);
  }


  function deleteItem(PostId) {
    const newArrayAfterDelete = ArrayOfObjects.filter((post) => {
      return post.id != PostId;
    });
    setArrayOfObjects(newArrayAfterDelete);
  }


  function addNewComment(commentContent, id) {
    let myOldPost = ArrayOfObjects.filter((post) => post.id == id)[0];
    let oldCommentCount = myOldPost.comments.length;
    let newCommentObject = {
      commentContent: commentContent,
      commentid: oldCommentCount + 1,
      commentPhoto:{max}
    };
    let newArrayAfterUpdate = ArrayOfObjects.map((currentPost) => {
      if (currentPost.id == id) {
        currentPost.comments.push(newCommentObject);
      }
      return currentPost;
    });
    setArrayOfObjects(newArrayAfterUpdate);
  }


  function deleteComment(postid, commentid) {
    let newArrayAfterCommentDelted = ArrayOfObjects.map((post) => {
      if (post.id == postid) {
        let newArrayOfComments = post.comments.filter((comment) => {
          return comment.commentid != commentid;
        });

        return { ...post, comments: newArrayOfComments };
      }

      return post;
    });

    setArrayOfObjects(newArrayAfterCommentDelted);
  }

  
  function updateComment(NewContent, postid, commentid) {
    let newArrayAfterCommentUpdated = ArrayOfObjects.map((post) => {
      if (post.id == postid) {
        let newArrayofCommentsAfterUpdate = post.comments.map((comment) => {
          if (comment.commentid == commentid) {
            return { ...comment, commentContent: NewContent };
          }
          return comment;
        });

        post = { ...post, comments: newArrayofCommentsAfterUpdate };
      }

      return post;
    });

    setArrayOfObjects(newArrayAfterCommentUpdated);
  }
  return (
    <>
      <div id="PostsWrapper">
        {ArrayOfObjects.map((post) => {
          return (
            <Post
              UniqueID={post.id}
              key={post.id}
              likes={post.likes}
              photo={post.photo}
              time={post.time}
              content={post.content}
              username={post.username}
              comments={post.comments}
              addNewComment={addNewComment}
              delteItem={deleteItem}
              deleteComment={deleteComment}
              updateComment={updateComment}
            ></Post>
          );
        })}
      </div>

      <NewPost AddnewPostInsideArray={addNewPost}></NewPost>
    </>
  );
}

export default App;
