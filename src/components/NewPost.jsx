import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost(props) {
  const [ body, setBody ] = useState('');
  const [ name, setName ] = useState('');
  function changeBodyHandler(event) {
    setBody(event.target.value)
  }

  function changeNameHandler(event) {
    setName(event.target.value)
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    const postData ={
      body: body,
      author: name
    };
    props.onAddPost(postData);
    props.onCancel();
  }
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>cancel</button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
}

export default NewPost;
