import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import uuid from "uuid";
import { Header } from "semantic-ui-react";

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
  chances,
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
    // window.innerWidth < 950 ? setToMobileView(true) : setToMobileView(false);
    window.innerWidth < 550 ? setToMobileView(true) : setToMobileView(false);
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
            setTimeout(() => {
              handlePlayNext();
            }, 1000);
          }}
        >
          <Abcjs
            className="abc"
            notation={playNext.startStopTimes.notation}
            parserParams={{}}
            engraverParams={
              isMobileView ? notationStylesMobile : notationStylesDesktop
            }
          />
        </button>,
        <button
          key={uuid()}
          onClick={() => {
            setPlayState(true);
            handleWrongAnswer();
            audioFailureRef.current.play();
            setTimeout(() => {
              handlePlayNext();
            }, 1000);
          }}
        >
          <Abcjs
            className="abc"
            notation={playNext.wrongNotation.notation}
            parserParams={{}}
            engraverParams={
              isMobileView ? notationStylesMobile : notationStylesDesktop
            }
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

      {lives > 0 && chances < 3 ? (
        <div
          className={
            isPlaying
              ? "answer-btns btn btn-notation-clicked"
              : "answer-btns btn btn-notation"
          }
        >
          {shuffledBtns}
        </div>
      ) : (
        <Header size="huge" className="Game-over-header">
          Game Over
        </Header>
      )}
    </div>
  );
};

const mapStateToProps = ({
  chances,
  level,
  lives,
  questions,
  playNext,
  isPlaying
}) => ({
  chances,
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
