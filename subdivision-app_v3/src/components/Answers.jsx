import React from "react";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import PropTypes from "prop-types";
import uuid from "uuid";
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from "../actions/handleAnswers";
import { handlePlayNext } from "../actions/handlePlayNext";
import { Button } from "semantic-ui-react";
import Abcjs from "react-abc";
import success from "../audio/sfx/success.mp3";
import failure from "../audio/sfx/failure.mp3";
import "./Answers.scss";

const playSuccess = () => {
  const success = document.getElementById("success");
  success.play();
};

const playFailure = () => {
  const failure = document.getElementById("failure");
  failure.play();
};

const Answers = ({
  questions,
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext,
  playNext
}) => {
  const generateBtns = () =>
    shuffle([
      <button
        className="notation"
        key={uuid()}
        onClick={() => {
          handleCorrectAnswer();
          playSuccess();
          handlePlayNext();
        }}
      >
        <Abcjs
          className="abc"
          notation={playNext.startStopTimes.notation}
          parserParams={{}}
          // engraverParams={{ responsive: "resize" }}
          renderParams={{ viewportHorizontal: true }}
        />
      </button>,
      <button
        className="notation"
        key={uuid()}
        onClick={() => {
          handleWrongAnswer();
          playFailure();
          handlePlayNext();
        }}
      >
        <Abcjs
          className="abc"
          notation={playNext.wrongNotation.notation}
          parserParams={{}}
          renderParams={{ viewportHorizontal: true }}
        />
      </button>
    ]);
  return (
    <div className="answers">
      <audio src={success} id="success"></audio>
      <audio src={failure} id="failure"></audio>
      <div className="answer-btns">{generateBtns()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  questions: state.questions,
  playNext: state.playNext
});

export default connect(mapStateToProps, {
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext
})(Answers);

Answers.propTypes = {
  handleCorrectAnswer: PropTypes.func,
  handleWrongAnswer: PropTypes.func,
  handlePlayNext: PropTypes.func
};
