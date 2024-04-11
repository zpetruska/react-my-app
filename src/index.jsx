import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts, {PostsLoader} from './routes/Posts';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import NewPost, {NewPostAction} from "./routes/NewPost";
import PostDetails, {PostDetailsLoader} from "./routes/PostDetails";

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/',
        element: <Posts />,
        loader: PostsLoader,
        children:[
          { path: '/new',
            action: NewPostAction,
            element: <NewPost />},
          { path: '/:id',
            loader: PostDetailsLoader,
            element: <PostDetails />}
        ]},
    ]}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
