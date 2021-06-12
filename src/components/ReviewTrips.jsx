import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, MenuItem, Select, InputLabel } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(255,255,255,0.5)",
    margin: "auto",
    minHeight: "350px",
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    width: "600px",
  },
  table: {
    width: "100%",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  padding: {
    width: "150px",
    paddingRight: theme.spacing(2),
  },
}));

export default function BasicTable() {
  const classes = useStyles();
  const trips = useSelector((state) => state.trips);
  const [searchItem, setSearchItem] = React.useState("");

  const searchedList = trips.filter((trip) => trip.type === searchItem);

  const newList = searchItem === "" ? trips : searchedList;

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          color="secondary"
          className={classes.padding}
        >
          Search by
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          color="secondary"
          variant="outlined"
          value={searchItem}
          onChange={({ target: { value } }) => setSearchItem(value)}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Track">Trek</MenuItem>
          <MenuItem value="Club">Club</MenuItem>
          <MenuItem value="Tropic">Tropic</MenuItem>
        </Select>
      </div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newList?.length ? (
              newList.map((trip, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {trip?.date}
                  </TableCell>
                  <TableCell align="right">{trip?.place}</TableCell>
                  <TableCell align="right">{trip?.type}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell component="th" scope="row">
                  --
                </TableCell>
                <TableCell align="right">--</TableCell>
                <TableCell align="right">--</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
