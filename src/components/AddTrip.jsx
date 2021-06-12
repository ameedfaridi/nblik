import React from "react";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { add_trip } from "../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    color: theme.palette.white.main,
    display: "grid",
    placeItems: "center",
  },
  form: {
    background: theme.palette.white.light,
    width: theme.spacing(70),
    height: theme.spacing(50),
    borderRadius: theme.spacing(5),
    padding: theme.spacing(5),
    display: "grid",
    placeItems: "center",
  },
  textField: {
    width: "20vw",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  padding: {
    paddingRight: theme.spacing(2),
  },
}));

export default function AddTrip() {
  const classes = useStyles();
  const [date, setDate] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [type, setType] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trip = { date, place, type };
    dispatch(add_trip(trip));
    setOpen(true);
    setDate("");
    setType("");
    setPlace("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Successfully Added"
      />
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextFieldContainer inputLabel="Date">
          <TextField
            type="date"
            className={classes.textField}
            color="secondary"
            variant="outlined"
            style={{
              color: "white",
            }}
            fullWidth
            required
            value={date}
            onChange={({ target: { value } }) => setDate(value)}
          />
        </TextFieldContainer>

        <TextFieldContainer inputLabel="Place">
          <TextField
            className={classes.textField}
            color="secondary"
            variant="outlined"
            style={{
              color: "white",
            }}
            fullWidth
            required
            value={place}
            onChange={({ target: { value } }) => setPlace(value)}
          />
        </TextFieldContainer>

        <TextFieldContainer inputLabel="Type">
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            color="secondary"
            variant="outlined"
            className={classes.textField}
            fullWidth
            required
            value={type}
            onChange={({ target: { value } }) => setType(value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Trek">Trek</MenuItem>
            <MenuItem value="Club">Club</MenuItem>
            <MenuItem value="Tropic">Tropic</MenuItem>
          </Select>
        </TextFieldContainer>

        <Button
          color="secondary"
          variant="contained"
          style={{ justifySelf: "flex-end" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

const TextFieldContainer = ({ inputLabel, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.flex}>
      <InputLabel
        id="demo-simple-select-outlined-label"
        color="secondary"
        className={classes.padding}
      >
        {inputLabel}
      </InputLabel>
      {children}
    </div>
  );
};
