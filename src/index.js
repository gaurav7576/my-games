import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("main")
);
