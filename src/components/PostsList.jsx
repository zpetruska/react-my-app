import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import {useState} from "react";
import Modal from "./Modal";

function PostsList({isPosting, onClosePosting}) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    setPosts((posts)=> [postData, ...posts]);
  }

  return(
    <ul className={classes.posts}>
      {isPosting &&
      <Modal onClose={onClosePosting}>
        <NewPost onCancel={onClosePosting} onAddPost={addPostHandler}/>
      </Modal>}
      {posts.length >0 && posts.map((post)=>
      <li>
        <Post key={post.body} author={post.author} body={post.body}/>
      </li>
      )}
      {posts.length === 0 && (
        <div style={{textAlign: 'center', gridColumn: 2}}>
        <h2>there are no posts yet</h2>
        </div>
      )}
    </ul>
  );
}
export default PostsList;