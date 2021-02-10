import React from "react";
import { Typography, Grid, makeStyles, Paper, Grow } from "@material-ui/core";
import CarCard from "./CarCard";
import generateCarId from "../helpers/generateCarId";

const useStyles = makeStyles((theme) => ({
  noResults: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
  },
}));

function CarList({
  likedCars,
  hiddenCars,
  cars,
  filter,
  handleLike,
  handleHide,
  visible,
}) {
  const classes = useStyles();
  const filterByLikes = React.useCallback(
    (cars) => cars.filter((car) => likedCars.indexOf(generateCarId(car)) > -1),
    [likedCars]
  );
  const filterByHidden = React.useCallback(
    (cars) => cars.filter((car) => hiddenCars.indexOf(generateCarId(car)) > -1),
    [hiddenCars]
  );

  const getCarsToShow = () => {
    switch (filter) {
      case "Liked":
        return filterByLikes(cars);
      case "Hidden":
        return filterByHidden(cars);
      default:
        return cars;
    }
  };

  const shownCars = getCarsToShow();

  return (
    <Grid container spacing={2}>
      {shownCars.length > 0
        ? shownCars.map((car) => {
            let id = generateCarId(car);
            return (
              <Grow key={id} in={visible} timeout={300}>
                {/* Set diffferent breakpoints but also a min width for edge cases on text */}
                <Grid
                  style={{ minWidth: 380 }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <CarCard
                    {...car}
                    isLiked={likedCars.indexOf(id) > -1}
                    isHidden={hiddenCars.indexOf(id) > -1}
                    onLike={() => handleLike(id)}
                    onHide={() => handleHide(id)}
                  />
                </Grid>
              </Grow>
            );
          })
        : visible && (
            <Grid container justify="center">
              <Paper className={classes.noResults}>
                <Typography>No Results Found</Typography>
              </Paper>
            </Grid>
          )}
    </Grid>
  );
}

export default CarList;
