import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { getRandQuestion } from "../../action-creators/getRandQuestionAction";
import { setPlayState } from "../../action-creators/setPlayState";
import HearAgain from "../hearAgain/HearAgain";
import "./question.scss";
import Audio from "../audio/Audio";

import loop3 from "../../audio/loops/loop3.mp3";
import loop7 from "../../audio/loops/loop7.mp3";

const Question = ({
  chances,
  isPlaying,
  lives,
  level,
  muted,
  playNext,
  setPlayState
}) => {
  const [hearAgainBtnDisabled, toggleHearAgainBtnDisabled] = useState(false);
  let [hearAgainNumRepeats, setHearAgainNumRepeats] = useState(0);

  const audioRef = useRef();
  useEffect(() => {
    setPlayState(true);
    if (lives > 0 && chances < 10) {
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
    level.mode === "Easy"
      ? (audioRef.current.src = `${loop3}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`)
      : (audioRef.current.src = `${loop7}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`);
    audioRef.current.play();
  };

  const handleToggleDisabled = () => {
    if (hearAgainNumRepeats < 2) {
      toggleHearAgainBtnDisabled(false);
    }
  };

  return (
    <>
      {lives > 0 && chances < 10 ? (
        <HearAgain
          numRepeats={hearAgainNumRepeats}
          disabled={
            isPlaying || hearAgainBtnDisabled || lives === 0 || chances === 10
          }
          hearLoopAgain={hearLoopAgain}
          lives={lives}
        />
      ) : null}

      <div className="Question">
        <Audio
          level={level}
          playNext={playNext}
          setPlayState={setPlayState}
          handleToggleDisabled={handleToggleDisabled}
          ref={audioRef}
          muted={muted}
        />
      </div>
    </>
  );
};

const mapStateToProps = ({
  chances,
  isPlaying,
  level,
  lives,
  muted,
  playNext
}) => ({
  chances,
  isPlaying,
  level,
  lives,
  muted,
  playNext
});

// export default connect(mapStateToProps, { getRandQuestion, setPlayState })(
export default connect(mapStateToProps, { setPlayState })(Question);

Question.propTypes = {
  playNext: PropTypes.object.isRequired,
  lives: PropTypes.number.isRequired,
  level: PropTypes.object.isRequired,
  setPlayState: PropTypes.func
};
