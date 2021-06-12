import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    textAlign: "center",
  },
  image: {
    marginTop: theme.spacing(2),
    width: "500px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" color="secondary">
        Welcome to Tour n Travel
      </Typography>
      <Typography variant="h4" color="secondary">
        The world is a book and those who do not travel read only one page
      </Typography>
      <img
        src="https://www.rentcafe.com/blog/wp-content/uploads/sites/5/2020/04/traveling-change-featured.jpg?w=890"
        alt="image"
        className={classes.image}
      />
    </div>
  );
}
