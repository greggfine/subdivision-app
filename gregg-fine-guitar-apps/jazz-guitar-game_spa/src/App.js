import React from "react";
import { connect } from "react-redux";
import Question from "./components/question/Question";
import Answers from "./components/answers/Answers";
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import GameOverDisplay from "./components/gameOverDisplay/GameOverDisplay";
import StartGameDisplay from "./components/startGameDisplay/StartGameDisplay";

import "./App.css";

const JazzGuitarGameApp = ({ gameOver, startGame }) => {
  return gameOver ? (
    <GameOverDisplay />
  ) : startGame === false ? (
    <StartGameDisplay />
  ) : (
    <div className="App">
      <ScoreBoard />
      <div className="question-answers-wrapper">
        <Question />
        <Answers />
      </div>
    </div>
  );
};

const mapStateToProps = ({ gameOver, startGame }) => ({ gameOver, startGame });

export default connect(mapStateToProps)(JazzGuitarGameApp);
