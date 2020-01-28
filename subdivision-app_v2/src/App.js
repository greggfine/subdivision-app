import React from "react";
import "./App.css";
import Question from "./components/Question";
import Answers from "./components/Answers";
import ScoreBoard from "./components/ScoreBoard";
import { Container, Header } from "semantic-ui-react";
import GameOverDisplay from "./components/GameOverDisplay";
import StartGameDisplay from "./components/StartGameDisplay";
import { connect } from "react-redux";

function App({ gameOver, startGame }) {
  return gameOver ? (
    <GameOverDisplay />
  ) : startGame === false ? (
    <StartGameDisplay />
  ) : (
    <div className="app">
      <ScoreBoard />
      <Header size="huge">Subdivision App</Header>
      <Question />
      <Answers />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameOver: state.gameOver,
    startGame: state.startGame
  };
};

export default connect(mapStateToProps)(App);
