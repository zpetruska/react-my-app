import Post from "./Post";
import classes from "./PostsList.module.css";
import {useLoaderData} from "react-router-dom";

function PostsList({isPosting, onClosePosting}) {
  const posts = useLoaderData();

  return(
    <ul className={classes.posts}>
      {posts.length >0 && posts.map((post)=>
        <Post key={post.id} id={post.id} author={post.author} body={post.body}/>
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