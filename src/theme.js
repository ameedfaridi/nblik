import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(200,223,86)",
      light: "rgb(200,223,86,0.6)",
    },
    secondary: {
      main: "rgb(69,114,108)",
    },
    white: {
      main: "#fff",
      light: "rgba(255,255,255,0.5)",
    },
  },
});
