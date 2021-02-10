import React from "react";
import { IconButton } from "@material-ui/core";

// Handles a like button with custom svg icons
function LikeButton({ isLiked, onLike }) {
  return (
    <IconButton aria-label="like car" onClick={onLike}>
      {isLiked ? (
        <img src={"icons/heart_filled.svg"} alt="like" width="25" height="25" />
      ) : (
        <img src={"icons/heart.svg"} alt="like" width="25" height="25" />
      )}
    </IconButton>
  );
}

export default LikeButton;
