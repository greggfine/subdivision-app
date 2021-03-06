// REF: https://paulrosen.github.io/abcjs/visual/visual-params.html
// REF(React specific): http://fuhton.com/react-abc/src/defaults/#parser-params
// https://music.meta.stackexchange.com/questions/2782/documentation-for-abcjs
// http://abcnotation.com/blog/2010/01/31/how-to-understand-abc-the-basics/#further
// http://www.lesession.co.uk/abc/abc_notation.htm
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import uuid from "uuid";
import { Header } from "semantic-ui-react";
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

import startStopTimes from "../../util/startStopData";
const shuffledStartStopTimes = shuffle(startStopTimes);
let count = 0;
let randCount;

const Answers = ({
  chances,
  isPlaying,
  level,
  lives,
  handleCorrectAnswer,
  handleWrongAnswer,
  handlePlayNext,
  muted,
  playNext,
  setPlayState
}) => {
  const [shuffled, setShuffled] = useState([]);
  const audioSuccessRef = useRef();
  const audioFailureRef = useRef();

  const generateCounts = () => {
    //   increment count variable
    count++;
    // generate a random count variable
    if (count > shuffledStartStopTimes.length) {
      console.log("count greater than!");
    }
    randCount = Math.floor(Math.random() * shuffledStartStopTimes.length);
    //
    while (randCount === count) {
      randCount++;
      if (count > shuffledStartStopTimes.length) {
        console.log("randCount greater than!");
      }
    }
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
              generateCounts();
              handlePlayNext({
                startStopTimes: shuffledStartStopTimes[count],
                wrongNotation: shuffledStartStopTimes[randCount]
              });
            }, 1000);
          }}
        >
          <Abcjs className="abc" notation={playNext.startStopTimes.notation} />
        </button>,
        <button
          key={uuid()}
          onClick={() => {
            setPlayState(true);
            handleWrongAnswer();
            audioFailureRef.current.play();
            setTimeout(() => {
              generateCounts();
              handlePlayNext({
                startStopTimes: shuffledStartStopTimes[count],
                wrongNotation: shuffledStartStopTimes[randCount]
              });
            }, 1000);
          }}
        >
          <Abcjs className="abc" notation={playNext.wrongNotation.notation} />
        </button>
      ])
    );
  }, [playNext]);

  const shuffledBtns = shuffled.map(btn => {
    return btn;
  });

  return (
    <div className="Answers">
      <audio
        src={success}
        id="success"
        ref={audioSuccessRef}
        muted={muted}
      ></audio>
      <audio
        src={failure}
        id="failure"
        ref={audioFailureRef}
        muted={muted}
      ></audio>

      {lives > 0 && chances < 10 ? (
        <>
          <h2 className="level-mode">{level.mode} mode</h2>
          <div
            className={
              isPlaying
                ? "answer-btns btn btn-notation-clicked"
                : "answer-btns btn btn-notation"
            }
          >
            {shuffledBtns}
          </div>
        </>
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
  muted,
  questions,
  playNext,
  isPlaying
}) => ({
  chances,
  level,
  lives,
  muted,
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
