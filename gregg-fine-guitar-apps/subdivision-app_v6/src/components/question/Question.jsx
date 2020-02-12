import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRandQuestion } from "../../action-creators/getRandQuestionAction";
import { setPlayState } from "../../action-creators/setPlayState";
import HearAgain from "../hearAgain/HearAgain";
import "./question.scss";

const Question = ({ chances, lives, level, muted, playNext, setPlayState }) => {
  const [hearAgainBtnDisabled, toggleHearAgainBtnDisabled] = useState(false);
  let [hearAgainNumRepeats, setHearAgainNumRepeats] = useState(0);

  const audioRef = useRef();
  useEffect(() => {
    setPlayState(true);
    if (lives > 0 && chances < 3) {
      toggleHearAgainBtnDisabled(true);
      window.setTimeout(() => {
        setHearAgainNumRepeats(0);
        audioRef.current.play();
      }, 1000);
    }
  }, [playNext]);

  const hearLoopAgain = () => {
    setHearAgainNumRepeats((hearAgainNumRepeats += 1));
    toggleHearAgainBtnDisabled(!hearAgainBtnDisabled);
    audioRef.current.src = `${level.loop}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`;
    audioRef.current.play();
  };

  const handleToggleDisabled = () => {
    if (hearAgainNumRepeats < 2) {
      toggleHearAgainBtnDisabled(false);
    }
  };

  return (
    <>
      <HearAgain
        numRepeats={hearAgainNumRepeats}
        disabled={hearAgainBtnDisabled || lives === 0 || chances === 3}
        hearLoopAgain={hearLoopAgain}
        lives={lives}
      />
      <div className="Question">
        <audio
          src={`${level.loop}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
          type="audio/mp3"
          onPlay={() => {
            setPlayState(true);
          }}
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

const mapStateToProps = ({ chances, level, lives, playNext }) => ({
  chances,
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
