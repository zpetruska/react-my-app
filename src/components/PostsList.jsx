import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import {useState} from "react";
import Modal from "./Modal";

function PostsList({isPosting, onClosePosting}) {
  const [ body, setBody ] = useState('');
  const [ name, setName ] = useState('');
  function changeBodyHandler(event) {
    setBody(event.target.value)
  }

  function changeNameHandler(event) {
    setName(event.target.value)
  }

  return(
    <ul className={classes.posts}>
      {isPosting &&
      <Modal onClose={onClosePosting}>
        <NewPost onBodyChange={changeBodyHandler} onNameChange={changeNameHandler}/>
      </Modal>}
      <li>
        <Post author={name} body={body}/>
      </li>
      <li>
        <Post author="zac" body="awesome"/>
      </li>
    </ul>
  );
}
export default PostsList;