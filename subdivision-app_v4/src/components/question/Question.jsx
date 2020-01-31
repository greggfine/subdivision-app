import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRandQuestion } from "../../action-creators/getRandQuestionAction";
import { useToggle } from "../../hooks/toggleHook";
import HearAgain from "../hearAgain/HearAgain";
import MuteBtn from "../muteBtn/MuteBtn";

import { Header } from "semantic-ui-react";
import "./question.scss";

const Question = ({ lives, level, playNext }) => {
  const [disabled, toggleDisabled] = useState(false);
  const [muted, toggleMuted] = useToggle();
  let [numRepeats, setNumRepeats] = useState(0);

  const audioRef = useRef();
  useEffect(() => {
    if (lives > 0) {
      toggleDisabled(true);
      window.setTimeout(() => {
        audioRef.current.play();
      }, 1000);
    }
  }, [playNext]);

  const hearLoopAgain = () => {
    setNumRepeats((numRepeats += 1));
    toggleDisabled(!disabled);
    audioRef.current.src = `${level.loop}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`;
    audioRef.current.play();
  };

  const handleToggleDisabled = () => {
    numRepeats < 2 ? toggleDisabled(false) : setNumRepeats(0);
  };

  return (
    <div className="Question">
      <Header size="huge" className="identify-heading">
        Identify the Subdivision
      </Header>
      {level.mode}
      <audio
        src={`${level.loop}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
        type="audio/mp3"
        onPause={handleToggleDisabled}
        ref={audioRef}
        muted={muted}
        preload="auto"
      ></audio>
      <HearAgain
        numRepeats={numRepeats}
        disabled={disabled}
        hearLoopAgain={hearLoopAgain}
      />
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
  playNext: PropTypes.object.isRequired,
  lives: PropTypes.number.isRequired,
  level: PropTypes.object.isRequired
};
