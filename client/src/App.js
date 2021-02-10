import "./App.css";
import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import CarList from "./custom/CarList";
import Loader from "./custom/Loader";

const filters = ["All Cars", "Liked", "Hidden"];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  select: {
    textAlign: "left",
    width: 150,
    backgroundColor: "white",
  },
}));

function App() {
  const classes = useStyles();
  const [filter, setFilter] = React.useState(filters[0]);
  const [cars, setCars] = React.useState([]);
  const [likedCars, setLikedCars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hiddenCars, setHiddenCars] = React.useState([]);

  React.useEffect(() => {
    async function fetchCars() {
      setIsLoading(true);
      let response = await fetch("/cars");
      let data = await response.json();
      setCars(data);
      setIsLoading(false);
    }

    fetchCars();
  }, []);

  const [showCars, setShowCars] = React.useState(false);
  React.useEffect(() => {
    // Add delay to transitions for a better UI feel
    const swapTo = !isLoading;
    const timer = setTimeout(() => setShowCars(swapTo), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleLike = (id) => {
    let temp = [...likedCars];
    let index = temp.indexOf(id);
    if (index > -1) {
      temp.splice(index, 1);
    } else {
      temp.push(id);
    }
    setLikedCars(temp);
  };

  const handleHide = (id) => {
    let temp = [...hiddenCars];
    let index = temp.indexOf(id);
    if (index > -1) {
      temp.splice(index, 1);
    } else {
      temp.push(id);
    }
    setHiddenCars(temp);
  };

  return (
    <div className="App">
      <Container className={classes.root} maxWidth={false}>
        <Grid container justify="space-between" spacing={2}>
          <Grid item>
            <Typography variant="h4" component="h1">
              Sports Cars
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              className={classes.select}
              id="filter-cars"
              select
              value={filter}
              onChange={handleChange}
              variant="outlined"
              margin="dense"
            >
              {filters.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Loader message={"Loading cars..."} loading={!showCars} />
        <CarList
          cars={cars}
          filter={filter}
          likedCars={likedCars}
          hiddenCars={hiddenCars}
          handleHide={handleHide}
          handleLike={handleLike}
          visible={showCars}
        />
      </Container>
    </div>
  );
}

export default App;
