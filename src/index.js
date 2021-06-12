import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";

import App from "./App";
import { theme } from "./theme";
import { store } from "./redux";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
