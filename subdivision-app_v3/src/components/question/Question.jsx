import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRandQuestion } from "../../action-creators/getRandQuestionAction";

import loop4 from "../../audio/loops/loop4.mp3";

import { Button, Header } from "semantic-ui-react";
import "./question.scss";

const Question = ({ questions, getRandQuestion, playNext }) => {
  const [disabled, toggleDisabled] = useState(false);
  const audioRef = useRef();
  useEffect(() => {
    window.setTimeout(() => {
      audioRef.current.play();
    }, 1000);
  }, [playNext]);

  const hearLoopAgain = () => {
    audioRef.current.src = `${loop4}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`;
    audioRef.current.play();
  };
  return (
    <div className="Question">
      <Header size="huge" className="identify-heading">
        Identify the Subdivision
      </Header>
      <audio
        src={`${loop4}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
        type="audio/mp3"
        // onPause={handleToggleDisabled}
        ref={audioRef}
      ></audio>
      <Button
        onClick={hearLoopAgain}
        disabled={disabled}
        className="hear-loop-again-btn"
      >
        Hear Loop Again?
      </Button>
    </div>
  );
};

const mapStateToProps = ({ questions, playNext }) => ({ questions, playNext });

export default connect(mapStateToProps, { getRandQuestion })(Question);

Question.propTypes = {
  playNext: PropTypes.object
};
