// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [userComment, setUserComment] = useState('');

  const submitComment = (e) => {
    e.preventDefault();
    const newComment = {
      username: 'me',
      text: userComment
    }
    setComments([...comments, newComment]);
    setUserComment('');
  }

  const changeComment = (e) => {
    setUserComment(e.target.value);
  }

  return (
    <div className="comments-container">
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, index) => (
        <Comment key={props.postId + index} comment={comment} />
      ))}
      <CommentInput userComment={userComment} changeComment={changeComment} submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
