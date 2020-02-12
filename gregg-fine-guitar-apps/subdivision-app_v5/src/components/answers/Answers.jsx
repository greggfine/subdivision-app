// import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import AnswerChoices from "../answerChoices/AnswerChoices";

// import success from "../../audio/sfx/success.mp3";
// import failure from "../../audio/sfx/failure.mp3";

// import "./Answers.scss";

// export const Answers = ({ level }) => {
//   const [isMobileView, setToMobileView] = useState(false);
//   const audioSuccessFXRef = useRef();
//   const audioFailureFXRef = useRef();

//   const setNotationStylesBasedOnScreenSize = () => {
//     window.innerWidth < 950 ? setToMobileView(true) : setToMobileView(false);
//   };
//   useEffect(() => {
//     setNotationStylesBasedOnScreenSize();
//     window.addEventListener("resize", () =>
//       setNotationStylesBasedOnScreenSize()
//     );
//     return () => {
//       window.removeEventListener(
//         "resize",
//         setNotationStylesBasedOnScreenSize()
//       );
//     };
//   }, []);

//   return (
//     <div className="Answers">
//       <h2 className="level-mode">{level.mode} mode</h2>
//       <audio src={success} id="success" ref={audioSuccessFXRef}></audio>
//       <audio src={failure} id="failure" ref={audioFailureFXRef}></audio>

//       <AnswerChoices
//         // isMobileView={isMobileView}
//         audioSuccessFXRef={audioSuccessFXRef}
//         audioFailureFXRef={audioFailureFXRef}
//       />
//     </div>
//   );
// };

// const mapStateToProps = ({ level }) => ({ level });

// export default connect(mapStateToProps)(Answers);

// Answers.propTypes = {
//   level: PropTypes.object
// };

import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import uuid from "uuid";
import {
  notationStylesMobile,
  notationStylesDesktop
} from "../../util/notationStyles";
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from "../../action-creators/handleAnswers";
import { handlePlayNext } from "../../action-creators/handlePlayNext";
import Abcjs from "react-abc";
import { setPlayState } from "../../action-creators/setPlayState";

import success from "../../audio/sfx/success.mp3";
import failure from "../../audio/sfx/failure.mp3";

import "./Answers.scss";

const Answers = ({
  isPlaying,
  level,
  lives,
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext,
  playNext,
  setPlayState
}) => {
  const [isMobileView, setToMobileView] = useState(false);
  const [shuffled, setShuffled] = useState([]);
  const audioSuccessRef = useRef();
  const audioFailureRef = useRef();

  const setNotationStylesBasedOnScreenSize = () => {
    window.innerWidth < 950 ? setToMobileView(true) : setToMobileView(false);
  };
  useEffect(() => {
    setShuffled(
      shuffle([
        <button
          key={uuid()}
          onClick={() => {
            setPlayState(true);
            handleCorrectAnswer();
            audioSuccessRef.current.play();
            handlePlayNext();
          }}
        >
          <Abcjs
            className="abc"
            notation={playNext.startStopTimes.notation}
            parserParams={{}}
            engraverParams={
              isMobileView ? notationStylesMobile : notationStylesDesktop
            }
            renderParams={{ viewportHorizontal: true }}
          />
        </button>,
        <button
          key={uuid()}
          onClick={() => {
            setPlayState(true);
            handleWrongAnswer();
            audioFailureRef.current.play();
            handlePlayNext();
          }}
        >
          <Abcjs
            className="abc"
            notation={playNext.wrongNotation.notation}
            parserParams={{}}
            engraverParams={
              isMobileView ? notationStylesMobile : notationStylesDesktop
            }
            renderParams={{ viewportHorizontal: true }}
          />
        </button>
      ])
    );
  }, [isMobileView, playNext]);

  useEffect(() => {
    setNotationStylesBasedOnScreenSize();
    window.addEventListener("resize", () =>
      setNotationStylesBasedOnScreenSize()
    );
    return () => {
      window.removeEventListener(
        "resize",
        setNotationStylesBasedOnScreenSize()
      );
    };
  }, []);

  const shuffledBtns = shuffled.map(btn => {
    return btn;
  });

  return (
    <div className="Answers">
      <h2 className="level-mode">{level.mode} mode</h2>
      <audio src={success} id="success" ref={audioSuccessRef}></audio>
      <audio src={failure} id="failure" ref={audioFailureRef}></audio>
      {/* <div
        className="answer-btns"
        style={{ display: lives > 0 ? "block" : "none" }}
      > */}
      <div
        className={
          isPlaying
            ? "answer-btns btn btn-notation-clicked"
            : "answer-btns btn btn-notation"
        }
      >
        {shuffledBtns}
      </div>
    </div>
    // </div>
  );
};

const mapStateToProps = ({ level, lives, questions, playNext, isPlaying }) => ({
  level,
  lives,
  questions,
  playNext,
  isPlaying
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
  setPlayState: PropTypes.func
};
