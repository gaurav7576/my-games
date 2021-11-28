import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Hangman from "./hangman/Hangman";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import TicTacToe from "./tic-tac-toe/TicTacToe";

function Main() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hangman" component={Hangman} />
        <Route path="/tic-tac-toe" component={TicTacToe} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default Main;
