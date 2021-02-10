import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  hidden: {
    filter:
      "invert(46%) sepia(33%) saturate(3834%) hue-rotate(163deg) brightness(97%) contrast(101%)",
  },
}));

// Hide button with custom svg icon handling changing colors
function HideButton({ isHidden, onHide }) {
  const classes = useStyles();

  return (
    <IconButton
      aria-label="hide car"
      onClick={onHide}
      className={clsx(isHidden ? classes.hidden : null)}
    >
      <img src={"icons/hide.svg"} alt="like" width="25" height="25" />
    </IconButton>
  );
}

export default HideButton;
