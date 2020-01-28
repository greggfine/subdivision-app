import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRandQuestion } from "../actions/getRandQuestionAction";
import PropTypes from "prop-types";
import loop4 from "../audio/loops/loop4.mp3";
import { Button } from "semantic-ui-react";

const Question = ({ questions, getRandQuestion, playNext }) => {
  const [disabled, toggleDisabled] = useState(true);
  let audio;
  useEffect(() => {
    audio = document.querySelector("audio");
    window.setTimeout(() => {
      audio.play();
    }, 1000);
  }, [playNext]);

  //   const handleToggleDisabled = () => {
  //     console.log("hello");
  //     toggleDisabled(!disabled);
  //   };

  const hearLoopAgain = () => {
    audio.src = `${loop4}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`;
    audio.play();
  };
  return (
    <div className="question">
      <h1>?</h1>
      <audio
        src={`${loop4}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
        type="audio/mp3"
        // onPause={handleToggleDisabled}
      ></audio>
      <Button onClick={hearLoopAgain} disabled={disabled}>
        Hear Loop Again?
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    questions: state.questions,
    playNext: state.playNext
  };
};

export default connect(mapStateToProps, { getRandQuestion })(Question);

Question.propTypes = {
  playNext: PropTypes.object
};
