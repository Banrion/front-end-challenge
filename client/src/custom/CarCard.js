import React from "react";
import clsx from "clsx";
import {
  Typography,
  Grid,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
} from "@material-ui/core";
import HideButton from "../buttons/HideButton";
import LikeButton from "../buttons/LikeButton";
import ShareButton from "../buttons/ShareButton";

// Setup a foramtter for dollars and assume us for now
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
    margin: theme.spacing(2),
  },
  saleText: {
    color: "green",
    fontWeight: "bold",
  },
  alignRight: {
    textAlign: "right",
  },
  stretch: {
    flex: 1,
  },
  opacity: {
    opacity: 0.5,
  },
}));

// Complex card to show details of a car
function CarCard({
  driveType,
  engineType,
  engineVolume,
  fuelType,
  imageUrl,
  make,
  model,
  price,
  trim,
  year,
  isLiked,
  isHidden,
  onLike,
  onHide,
}) {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        className={clsx(classes.media, isHidden ? classes.opacity : null)}
        image={encodeURI(imageUrl)}
        title="Contemplative Reptile"
      />
      <CardContent className={clsx(isHidden ? classes.opacity : null)}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6" component="div">
              {`${year} ${make} ${model}`}
            </Typography>
            <Typography variant="caption" component="div">
              {`${trim}`}
            </Typography>
            <Typography variant="caption" component="div">
              {`${fuelType} ${engineVolume.toFixed(1)}L ${engineType}`}
            </Typography>
          </Grid>
          <Grid item className={classes.alignRight}>
            <Typography variant="h6" component="div">
              {`${formatter.format(price)}`}
            </Typography>
            <Typography
              variant="caption"
              component="div"
              className={classes.saleText}
            >
              For Sale
            </Typography>
            <Typography variant="caption" component="div">
              {`${driveType}`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <div className={classes.stretch}>
          <LikeButton isLiked={isLiked} onLike={onLike} />
          <HideButton isHidden={isHidden} onHide={onHide} />
        </div>
        <div>
          <ShareButton />
        </div>
      </CardActions>
    </Card>
  );
}

export default CarCard;
