import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRandQuestion } from "../../action-creators/getRandQuestionAction";
import { useToggle } from "../../hooks/toggleHook";
import MuteBtn from "../muteBtn/MuteBtn";
import Audio from "../audio/Audio";

import questionGtr from "../../images/guitar-transparent-6.png";

import "./question.scss";

const Question = ({ lives, level, playNext }) => {
  const [muted, toggleMuted] = useToggle();

  const audioRef = useRef();
  useEffect(() => {
    if (lives > 0) {
      window.setTimeout(() => {
        audioRef.current.play();
      }, 1000);
    }
  }, [playNext]);

  return (
    <div className="Question">
      <div className="question-answer-display">
        <img className="who-is-this" src={questionGtr} alt="Guitar Icon" />
      </div>
      <Audio />
      <MuteBtn muted={muted} toggleMuted={toggleMuted} />
    </div>
  );
};

const mapStateToProps = ({ level, lives, playNext }) => ({
  level,
  lives,
  playNext
});

export default connect(mapStateToProps, { getRandQuestion })(Question);

Question.propTypes = {
  playNext: PropTypes.object,
  lives: PropTypes.number,
  level: PropTypes.object
};
