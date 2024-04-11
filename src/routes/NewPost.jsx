import classes from './NewPost.module.css';
import Modal from "../components/Modal";
import {Form, Link, redirect} from "react-router-dom";

function NewPost() {

  return (
    <Modal>
      <Form method='post' className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name='body'/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name='author'/>
        </p>
        <div className={classes.actions}>
          <Link to='..' type="button">cancel</Link>
          <button type="submit">submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function NewPostAction({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://ec2-54-151-31-15.us-west-1.compute.amazonaws.com:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('/');
}