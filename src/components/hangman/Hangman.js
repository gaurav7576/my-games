import React from "react";
import "./Hangman.scss";

class Hangman extends React.Component {
  componentDidMount() {
    let script = document.createElement("script");
    script.setAttribute("id", "hangman");
    script.src = "/src/js/hangman.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  render() {
    return (
      <div className="hm">
        <div className="wrapper">
          <h1>Hangman</h1>
          <h2>Vanilla JavaScript Hangman Game</h2>
          <p>
            Use the alphabet below to guess the word, or click hint to get a
            clue.{" "}
          </p>
        </div>
        <div className="wrapper">
          <div id="buttons"></div>
          <p id="catagoryName"></p>
          <div id="hold"></div>
          <p id="mylives"></p>
          <p id="clue">Clue -</p>
          <canvas id="stickman">
            This Text will show if the Browser does NOT support HTML5 Canvas tag
          </canvas>
          <div className="container">
            <button id="hint">Hint</button>
            <button id="reset">Play again</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hangman;
