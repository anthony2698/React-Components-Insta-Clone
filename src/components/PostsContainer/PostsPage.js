import React from "react";
import Post from "./Post";
import "./Posts.css";


const PostsPage = (props) => {
  console.log(props.data);
  return (
    <div className="posts-container-wrapper">
      {
      props.data.map((el, index) => {
        return (<Post post={el} key={index} />)
      })
      }
    </div>
  );
};

export default PostsPage;

