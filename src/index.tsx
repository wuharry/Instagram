import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import store from "store";
import {Provider} from "react-redux"; //Provider當作ui根redux的橋樑
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
