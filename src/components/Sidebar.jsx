import React from "react";
import { Home, EventNote, EventAvailable } from "@material-ui/icons";
import { makeStyles, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    alignItems: "center",
    height: "100%",
  },
  container: {
    display: "grid",
  },
  icon: {
    color: theme.palette.white.main,
    margin: theme.spacing(2),
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const router = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <IconButton onClick={() => router.push("/")}>
          <Home className={classes.icon} />
        </IconButton>
        <IconButton onClick={() => router.push("/add-trip")}>
          <EventNote className={classes.icon} />
        </IconButton>
        <IconButton onClick={() => router.push("/review-trips")}>
          <EventAvailable className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
}
