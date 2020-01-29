import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import uuid from "uuid";
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from "../../action-creators/handleAnswers";
import { handlePlayNext } from "../../action-creators/handlePlayNext";
import Abcjs from "react-abc";

import success from "../../audio/sfx/success.mp3";
import failure from "../../audio/sfx/failure.mp3";

import "./Answers.scss";

const Answers = ({
  questions,
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext,
  playNext
}) => {
  const audioSuccessRef = useRef();
  const audioFailureRef = useRef();
  const generateBtns = () =>
    shuffle([
      <button
        className="notation"
        key={uuid()}
        onClick={() => {
          handleCorrectAnswer();
          audioSuccessRef.current.play();
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
          audioFailureRef.current.play();
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
    <div className="Answers">
      <audio src={success} id="success" ref={audioSuccessRef}></audio>
      <audio src={failure} id="failure" ref={audioFailureRef}></audio>
      <div className="answer-btns">{generateBtns()}</div>
    </div>
  );
};

const mapStateToProps = ({ questions, playNext }) => ({ questions, playNext });

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
