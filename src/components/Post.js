import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "./Post.css";

const Post = forwardRef(({ title, description, message }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="feed--post--header">
        <Avatar />
        <div className="feed--post-title">
          <h4>{title}</h4>
          <div className="feed--post--description">{description}</div>
        </div>
      </div>
      <div className="feed--post--body">
        <p>{message}</p>
      </div>
      <div className="feed--post--buttons">
        <div className="feed--post--button">
          <ThumbUpOffAltIcon />
          <span>Like</span>
        </div>
        <div className="feed--post--button">
          <CommentIcon />
          <span>Comment</span>
        </div>
        <div className="feed--post--button">
          <ShareIcon />
          <span>Share</span>
        </div>
        <div className="feed--post--button">
          <SendIcon />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
});

export default Post;
