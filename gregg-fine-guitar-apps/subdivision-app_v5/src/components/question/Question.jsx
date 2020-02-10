import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRandQuestion } from "../../action-creators/getRandQuestionAction";
import { setPlayState } from "../../action-creators/setPlayState";
import HearAgain from "../hearAgain/HearAgain";
import "./question.scss";

const Question = ({ lives, level, muted, playNext, setPlayState }) => {
  const [disabled, toggleDisabled] = useState(false);
  let [numRepeats, setNumRepeats] = useState(0);

  const audioRef = useRef();
  useEffect(() => {
    if (lives > 0) {
      toggleDisabled(true);
      window.setTimeout(() => {
        setNumRepeats(0);
        audioRef.current.play();
        setPlayState(true);
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
    if (numRepeats < 2) {
      toggleDisabled(false);
    }
  };

  return (
    <>
      <HearAgain
        numRepeats={numRepeats}
        disabled={disabled}
        hearLoopAgain={hearLoopAgain}
      />
      <div className="Question">
        <audio
          src={`${level.loop}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
          type="audio/mp3"
          onPause={() => {
            handleToggleDisabled();
            setPlayState(false);
          }}
          ref={audioRef}
          muted={muted}
          //   muted={true}
          preload="auto"
        ></audio>
      </div>
    </>
  );
};

const mapStateToProps = ({ level, lives, playNext }) => ({
  level,
  lives,
  playNext
});

export default connect(mapStateToProps, { getRandQuestion, setPlayState })(
  Question
);

Question.propTypes = {
  playNext: PropTypes.object.isRequired,
  lives: PropTypes.number.isRequired,
  level: PropTypes.object.isRequired,
  setPlayState: PropTypes.func
};
