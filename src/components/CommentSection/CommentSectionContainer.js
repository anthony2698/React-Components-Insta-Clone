// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props.comments);
  const [comments] = useState(props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */
      comments.map((el, index) => {
        return (<Comment comment={el} key={index} />)
      })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
