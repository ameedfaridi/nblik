import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar, Sidebar, Home, AddTrip, ReviewTrips } from "./components";
import { Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("https://res.cloudinary.com/enchanting/images/w_1600,h_700,c_fill,f_auto,q_70/artemis-mdm/0a030df3-aa49-4994-b1ac-dec86681ce8b/destination-santorini-greece.jpg")`,
    overflow: "hidden",
  },
  whiteSheet: {
    height: "100%",
    background: theme.palette.primary.light,
  },
  content: {
    display: "flex",
    height: "100%",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.whiteSheet}>
        <Navbar />
        <div className={classes.content}>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-trip" component={AddTrip} />
            <Route exact path="/review-trips" component={ReviewTrips} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
