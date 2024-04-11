import './Posts.module.css';
import PostsList from "../components/PostsList";
import {Outlet} from "react-router-dom";

function Posts() {

  return (
    <>
      <Outlet/>
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function PostsLoader() {
  const resp = await fetch('http://ec2-54-151-31-15.us-west-1.compute.amazonaws.com:8080/posts');
  const resData = await resp.json();
  return resData.posts;
}