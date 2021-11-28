import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="game-head">
      <nav>
        <NavLink to="/" className="game-head-link" exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/tic-tac-toe" className="game-head-link">
          Tic Tac Toe
        </NavLink>
        {" | "}
        <NavLink to="/hangman" className="game-head-link">
          Hangman
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
