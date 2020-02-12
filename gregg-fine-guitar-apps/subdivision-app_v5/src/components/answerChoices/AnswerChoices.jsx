// REF: https://paulrosen.github.io/abcjs/visual/visual-params.html
// REF(React specific): http://fuhton.com/react-abc/src/defaults/#parser-params
import React from "react";
import { shuffle } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuid from "uuid";
import {
  notationStylesMobile,
  notationStylesDesktop
} from "../../util/notationStyles";
import Abcjs from "react-abc";
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from "../../action-creators/handleAnswers";
import { handlePlayNext } from "../../action-creators/handlePlayNext";
import { setPlayState } from "../../action-creators/setPlayState";
import "./answerChoices.scss";

const AnswerChoices = ({
  chances,
  lives,
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext,
  playNext,
  playState,
  setPlayState,
  isMobileView,
  audioSuccessFXRef,
  audioFailureFXRef
}) => {
  const handleClick = (answerType, audioFXType) => {
    if ((!playState && lives > 0) || (!playState && chances < 10)) {
      answerType();
      audioFXType.current.play();
      handlePlayNext();
      setPlayState(true);
    }
  };
  const generateAnswerChoices = () =>
    shuffle([
      <button
        className={playState ? "btn btn-notation-clicked" : "btn btn-notation"}
        key={uuid()}
        onClick={() => handleClick(handleCorrectAnswer, audioSuccessFXRef)}
      >
        <Abcjs
          disabled={true}
          notation={playNext.startStopTimes.notation}
          engraverParams={
            isMobileView ? notationStylesMobile : notationStylesDesktop
          }
        />
      </button>,
      <button
        className={playState ? "btn btn-notation-clicked" : "btn btn-notation"}
        key={uuid()}
        onClick={() => handleClick(handleWrongAnswer, audioFailureFXRef)}
      >
        <Abcjs
          disabled={true}
          notation={playNext.wrongNotation.notation}
          engraverParams={
            isMobileView ? notationStylesMobile : notationStylesDesktop
          }
        />
      </button>
    ]);
  return (
    <>
      <div
        className="answer-btns"
        style={{ display: lives > 0 ? "block" : "none" }}
      >
        {generateAnswerChoices()}
      </div>
    </>
  );
};

const mapStateToProps = ({
  chances,
  lives,
  questions,
  playNext,
  playState
}) => ({
  chances,
  lives,
  questions,
  playNext,
  playState
});

export default connect(mapStateToProps, {
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext,
  setPlayState
})(AnswerChoices);

AnswerChoices.propTypes = {
  handleCorrectAnswer: PropTypes.func,
  handleWrongAnswer: PropTypes.func,
  handlePlayNext: PropTypes.func,
  playState: PropTypes.bool,
  setPlayState: PropTypes.func
};
