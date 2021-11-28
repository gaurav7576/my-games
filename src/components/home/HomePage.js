import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => (
  <div className="jumbotron">
    <div className="blank-space"></div>
    <h1>Wanna Play Games...</h1>
    <div className="blank-space"></div>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-4">
        <Link to="tic-tac-toe" className="btn btn-primary btn-lg btn-block">
          Tic Tac Toe
        </Link>
      </div>
      <div className="col-md-4">
        <Link to="hangman" className="btn btn-primary btn-lg btn-block">
          Hangman
        </Link>
      </div>
      <div className="col-md-2"></div>
    </div>
  </div>
);

export default HomePage;
