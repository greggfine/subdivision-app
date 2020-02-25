import React from "react";
import { connect } from "react-redux";
import Question from "../question/Question";
import Answers from "../answers/Answers";
import ScoreBoard from "../scoreboard/ScoreBoard";
import GameOverDisplay from "../gameOverDisplay/GameOverDisplay";
import StartGameDisplay from "../startGameDisplay/StartGameDisplay";
import MuteBtn from "../muteBtn/MuteBtn";
import { useToggle } from "../../hooks/toggleHook";
import Tip from "../tip/Tip";
import TipMuteBtnWrapper from "../tip-muteBtn-wrapper/TipMuteBtnWrapper";

import "./subdivisionApp.scss";

import "../../App.css";

function SubdivisionApp({ gameOver, startGame }) {
  const [muted, toggleMuted] = useToggle();
  return gameOver ? (
    <GameOverDisplay />
  ) : startGame === false ? (
    <StartGameDisplay />
  ) : (
    <div>
      <ScoreBoard />
      <div className="app-wrapper">
        <Answers />
        <Question />
        <TipMuteBtnWrapper>
          <Tip />
          {/* <MuteBtn muted={muted} toggleMuted={toggleMuted} /> */}
        </TipMuteBtnWrapper>
        <div className="gtr-image"></div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ gameOver, startGame }) => ({ gameOver, startGame });

export default connect(mapStateToProps)(SubdivisionApp);
