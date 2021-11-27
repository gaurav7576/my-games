import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Wanna Play Games...</h1>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-4">
        <Link to="courses" className="btn btn-primary btn-lg">
          Tic Tac Toe
        </Link>
      </div>
      <div className="col-md-4">
        <Link to="about" className="btn btn-primary btn-lg">
          Hangman
        </Link>
      </div>
      <div className="col-md-2"></div>
    </div>
  </div>
);

export default HomePage;
