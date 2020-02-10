// REF: https://paulrosen.github.io/abcjs/visual/visual-params.html
// REF(React specific): http://fuhton.com/react-abc/src/defaults/#parser-params
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import uuid from "uuid";
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from "../../action-creators/handleAnswers";
import { handlePlayNext } from "../../action-creators/handlePlayNext";
import { setPlayState } from "../../action-creators/setPlayState";
import Abcjs from "react-abc";

import success from "../../audio/sfx/success.mp3";
import failure from "../../audio/sfx/failure.mp3";

import "./Answers.scss";

export const Answers = ({
  chances,
  level,
  lives,
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext,
  playNext,
  playState,
  setPlayState
}) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    window.innerWidth < 950 ? setMobile(true) : setMobile(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 950 ? setMobile(true) : setMobile(false);
    });
    return () => {
      window.removeEventListener("resize");
    };
  }, []);
  const audioSuccessRef = useRef();
  const audioFailureRef = useRef();
  const notationStylesMobile = {
    scale: 1.3,
    staffwidth: 250
  };
  const notationStylesDesktop = {
    scale: 1.5,
    staffwidth: 400
  };
  const generateBtns = () =>
    shuffle([
      <button
        className={playState ? "btn btn-notation-clicked" : "btn btn-notation"}
        key={uuid()}
        onClick={() => {
          if ((!playState && lives > 0) || (!playState && chances < 10)) {
            handleCorrectAnswer();
            audioSuccessRef.current.play();
            handlePlayNext();
            setPlayState(true);
          }
        }}
      >
        <Abcjs
          disabled={true}
          notation={playNext.startStopTimes.notation}
          engraverParams={mobile ? notationStylesMobile : notationStylesDesktop}
        />
      </button>,
      <button
        className={playState ? "btn btn-notation-clicked" : "btn btn-notation"}
        key={uuid()}
        onClick={() => {
          if ((!playState && lives > 0) || (!playState && chances < 10)) {
            handleWrongAnswer();
            audioFailureRef.current.play();
            handlePlayNext();
            setPlayState(true);
          }
        }}
      >
        <Abcjs
          disabled={true}
          notation={playNext.wrongNotation.notation}
          engraverParams={mobile ? notationStylesMobile : notationStylesDesktop}
        />
      </button>
    ]);
  return (
    <div className="Answers">
      <h2 className="mode">{level.mode} mode</h2>
      <audio src={success} id="success" ref={audioSuccessRef}></audio>
      <audio src={failure} id="failure" ref={audioFailureRef}></audio>
      <div
        className="answer-btns"
        style={{ display: lives > 0 ? "block" : "none" }}
      >
        {generateBtns()}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  chances,
  level,
  lives,
  questions,
  playNext,
  playState
}) => ({
  chances,
  level,
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
})(Answers);

Answers.propTypes = {
  handleCorrectAnswer: PropTypes.func,
  handleWrongAnswer: PropTypes.func,
  handlePlayNext: PropTypes.func,
  level: PropTypes.object,
  playState: PropTypes.bool,
  setPlayState: PropTypes.func
};

/* 
When game ends(lives === 0) OR (chances === 10)
    You shouldn't be able to click an Answer

    What allows answers to be clicked


*/
