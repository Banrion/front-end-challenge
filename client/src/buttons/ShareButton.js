import React from "react";
import { IconButton } from "@material-ui/core";

// Share button with custom svg icon
function ShareButton() {
  return (
    <IconButton aria-label="share car">
      <img src={"icons/share.svg"} alt="like" width="25" height="25" />
    </IconButton>
  );
}

export default ShareButton;
