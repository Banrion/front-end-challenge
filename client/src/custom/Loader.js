import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    loading: {
      textAlign: "center",
      margin: theme.spacing(2),
    },
  })
);

function Loader(props) {
  const classes = useStyles();
  return (
    <Collapse in={props.loading} timeout={200}>
      <Grid container className={classes.loading}>
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
        <Grid item xs={12}>
          <Typography>{props.message}</Typography>
        </Grid>
      </Grid>
    </Collapse>
  );
}

export default Loader;
